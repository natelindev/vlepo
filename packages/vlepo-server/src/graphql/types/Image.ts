import { promises as fsp } from 'fs';
import { FileUpload } from 'graphql-upload';
import { imageSize } from 'image-size';
import { arg, inputObjectType, list, mutationField, nonNull, objectType } from 'nexus';
import vibrant from 'node-vibrant';
import path from 'path';
import { v4 } from 'uuid';

import { OAuthCheckScope } from '../../oauth2/nexus';
import { streamToBuffer } from '../../util/streamToBuffer';
import { Upload } from './Upload';

export const Image = objectType({
  name: 'Image',
  definition(t) {
    t.implements('Node');
    t.id('id', {
      resolve: (root) => root.id,
    });
    t.model.owner();
    t.model.mainColor();
    t.model.secondaryColor();
    t.model.alt();
    t.model.url();
    t.model.height();
    t.model.width();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const createImageInput = inputObjectType({
  name: 'createImageInput',
  definition(t) {
    t.nonNull.string('url');
  },
});

export const uploadImages = mutationField('uploadImages', {
  type: nonNull(list(Image)),
  args: {
    files: arg({ type: nonNull(list(nonNull(Upload))) }),
  },
  authentication: true,
  authorize: OAuthCheckScope('image:create'),
  resolve: async (_root, args, ctx) => {
    const currentUser = ctx.currentUser!;
    const files = await Promise.all(args.files);

    if (files && files.length > 0) {
      return Promise.all(
        files
          .filter((f): f is FileUpload => f !== null)
          .map(async (file) => {
            const imageId = v4();
            const nameArr = file.filename.split('.');
            const extname = nameArr.slice(-1);
            const name = nameArr.slice(0, nameArr.length - 1).join('.');
            // read file to memory
            const imageBuffer = await streamToBuffer(file.createReadStream());
            // write file to fs
            await fsp.writeFile(
              path.join(path.resolve(process.env.IMAGE_PATH ?? '.'), `${imageId}.${extname}`),
              imageBuffer,
            );

            // calculate color and dimensions
            const pallette = await vibrant.from(imageBuffer).getPalette();
            const size = imageSize(imageBuffer);

            // save file to db
            return ctx.prisma.image.create({
              data: {
                id: imageId,
                owner: {
                  connect: {
                    id: currentUser.id,
                  },
                },
                alt: name,
                width: size.width,
                height: size.height,
                mainColor: pallette.Vibrant?.hex,
                secondaryColor: pallette.Muted?.hex,
                url: `${process.env.API_URL}/images/user-upload/${imageId}.${extname}`,
              },
            });
          }),
      );
    }
    return [];
  },
});
