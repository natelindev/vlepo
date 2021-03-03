import { mutationField } from 'nexus';

export const Mutation = mutationField((t) => {
  t.crud.createOneComment();
  t.crud.updateOneComment();
  t.crud.updateManyComment();
  t.crud.upsertOneComment();
  t.crud.deleteOneComment();
  t.crud.deleteManyComment();

  t.crud.createOneImage();
  t.crud.updateOneImage();
  t.crud.updateManyImage();
  t.crud.upsertOneImage();
  t.crud.deleteOneImage();
  t.crud.deleteManyImage();

  t.crud.createOneLink();
  t.crud.updateOneLink();
  t.crud.updateManyLink();
  t.crud.upsertOneLink();
  t.crud.deleteOneLink();
  t.crud.deleteManyLink();

  t.crud.createOnePaper();
  t.crud.updateOnePaper();
  t.crud.updateManyPaper();
  t.crud.upsertOnePaper();
  t.crud.deleteOnePaper();
  t.crud.deleteManyPaper();

  t.crud.createOnePost();
  t.crud.updateOnePost();
  t.crud.updateManyPost();
  t.crud.upsertOnePost();
  t.crud.deleteOnePost();
  t.crud.deleteManyPost();

  t.crud.createOneProject();
  t.crud.updateOneProject();
  t.crud.updateManyProject();
  t.crud.upsertOneProject();
  t.crud.deleteOneProject();
  t.crud.deleteManyProject();

  t.crud.createOneRating();
  t.crud.updateOneRating();
  t.crud.updateManyRating();
  t.crud.upsertOneRating();
  t.crud.deleteOneRating();
  t.crud.deleteManyRating();

  t.crud.createOneReaction();
  t.crud.updateOneReaction();
  t.crud.updateManyReaction();
  t.crud.upsertOneReaction();
  t.crud.deleteOneReaction();
  t.crud.deleteManyReaction();

  t.crud.createOneShareCount();
  t.crud.updateOneShareCount();
  t.crud.updateManyShareCount();
  t.crud.upsertOneShareCount();
  t.crud.deleteOneShareCount();
  t.crud.deleteManyShareCount();

  t.crud.createOneTag();
  t.crud.updateOneTag();
  t.crud.updateManyTag();
  t.crud.upsertOneTag();
  t.crud.deleteOneTag();
  t.crud.deleteManyTag();

  t.crud.createOneThought();
  t.crud.updateOneThought();
  t.crud.updateManyThought();
  t.crud.upsertOneThought();
  t.crud.deleteOneThought();
  t.crud.deleteManyThought();

  t.crud.createOneTranslation();
  t.crud.updateOneTranslation();
  t.crud.updateManyTranslation();
  t.crud.upsertOneTranslation();
  t.crud.deleteOneTranslation();
  t.crud.deleteManyTranslation();

  t.crud.createOneUser();
  t.crud.updateOneUser();
  t.crud.updateManyUser();
  t.crud.upsertOneUser();
  t.crud.deleteOneUser();
  t.crud.deleteManyUser();

  t.crud.createOneUserRole();
  t.crud.updateOneUserRole();
  t.crud.updateManyUserRole();
  t.crud.upsertOneUserRole();
  t.crud.deleteOneUserRole();
  t.crud.deleteManyUserRole();
});
