import React from 'react';
import { Column } from 'react-table';
import Layout from 'src/components/Layout';
import Sidebar from 'src/components/Sidebar';
import Table from 'src/components/Table';
import * as Model from 'src/schema/json-schema.json';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const data: {
  status: string;
  content: string;
  id: string;
  ownerId: string;
  title: string;
  headerImageUrl: string | null;
  updatedAt: string;
  editedAt: string | null;
  viewCount: number;
  createdAt: string;
  minuteRead: null;
}[] = [
  {
    status: 'PUBLISHED',
    content:
      'A sed sed aut unde qui odio quisquam deserunt impedit. Repudiandae soluta modi voluptas aut et ea id. Et quasi nam laudantium est esse voluptatem dolore architecto laboriosam. Voluptatem aut omnis voluptatibus. Cum odit et et.\n \rAmet nihil vero est eveniet odit quis ex. Quam voluptatem nostrum quidem excepturi. Quia cupiditate rerum eos natus eaque omnis qui explicabo. Cupiditate asperiores ut consequatur. Odio enim et consectetur et quos accusantium repudiandae.\n \rA voluptatum libero vitae similique corporis sit molestiae et. Quia velit autem in. Placeat amet minima temporibus. Vero eius voluptate accusamus consequuntur laboriosam nihil iure dolore natus. Sunt repellendus qui.\n \rTempora ut odio molestiae maiores inventore magnam ut iusto sit. Facilis voluptas sit ut. Pariatur natus debitis dicta consequuntur soluta corporis. Iste sit est quaerat occaecati et sit dolorem quisquam aut.\n \rMolestiae officiis totam magni recusandae expedita. Modi quia modi temporibus quod incidunt. Qui quod ratione repellat adipisci consequuntur quae in et maxime. Occaecati explicabo harum a.',
    id: 'b3d50168-5da3-462b-a41c-8d3b8aefbb70',
    ownerId: '4bca30f2-d2d6-4cb4-bc0a-ae6cccd78a1f',
    title: 'Product Branding Administrator',
    headerImageUrl: null,
    updatedAt: '2021-03-20 06:03:20.942',
    editedAt: null,
    viewCount: 0,
    createdAt: '2021-03-20 06:03:20.942',
    minuteRead: null,
  },
  {
    status: 'PUBLISHED',
    content:
      'A sed sed aut unde qui odio quisquam deserunt impedit. Repudiandae soluta modi voluptas aut et ea id. Et quasi nam laudantium est esse voluptatem dolore architecto laboriosam. Voluptatem aut omnis voluptatibus. Cum odit et et.\n \rAmet nihil vero est eveniet odit quis ex. Quam voluptatem nostrum quidem excepturi. Quia cupiditate rerum eos natus eaque omnis qui explicabo. Cupiditate asperiores ut consequatur. Odio enim et consectetur et quos accusantium repudiandae.\n \rA voluptatum libero vitae similique corporis sit molestiae et. Quia velit autem in. Placeat amet minima temporibus. Vero eius voluptate accusamus consequuntur laboriosam nihil iure dolore natus. Sunt repellendus qui.\n \rTempora ut odio molestiae maiores inventore magnam ut iusto sit. Facilis voluptas sit ut. Pariatur natus debitis dicta consequuntur soluta corporis. Iste sit est quaerat occaecati et sit dolorem quisquam aut.\n \rMolestiae officiis totam magni recusandae expedita. Modi quia modi temporibus quod incidunt. Qui quod ratione repellat adipisci consequuntur quae in et maxime. Occaecati explicabo harum a.',
    id: 'dbce922b-8cb4-48c0-a856-014cfa9b4112',
    ownerId: '4bca30f2-d2d6-4cb4-bc0a-ae6cccd78a1f',
    title: 'Product Branding Administrator',
    headerImageUrl: null,
    updatedAt: '2021-03-20 06:03:20.942',
    editedAt: null,
    viewCount: 0,
    createdAt: '2021-03-20 06:03:20.941',
    minuteRead: null,
  },
  {
    status: 'PUBLISHED',
    content:
      'A sed sed aut unde qui odio quisquam deserunt impedit. Repudiandae soluta modi voluptas aut et ea id. Et quasi nam laudantium est esse voluptatem dolore architecto laboriosam. Voluptatem aut omnis voluptatibus. Cum odit et et.\n \rAmet nihil vero est eveniet odit quis ex. Quam voluptatem nostrum quidem excepturi. Quia cupiditate rerum eos natus eaque omnis qui explicabo. Cupiditate asperiores ut consequatur. Odio enim et consectetur et quos accusantium repudiandae.\n \rA voluptatum libero vitae similique corporis sit molestiae et. Quia velit autem in. Placeat amet minima temporibus. Vero eius voluptate accusamus consequuntur laboriosam nihil iure dolore natus. Sunt repellendus qui.\n \rTempora ut odio molestiae maiores inventore magnam ut iusto sit. Facilis voluptas sit ut. Pariatur natus debitis dicta consequuntur soluta corporis. Iste sit est quaerat occaecati et sit dolorem quisquam aut.\n \rMolestiae officiis totam magni recusandae expedita. Modi quia modi temporibus quod incidunt. Qui quod ratione repellat adipisci consequuntur quae in et maxime. Occaecati explicabo harum a.',
    id: 'e628c651-b061-4e11-ad09-c88a4ecaa500',
    ownerId: '4bca30f2-d2d6-4cb4-bc0a-ae6cccd78a1f',
    title: 'Product Branding Administrator',
    headerImageUrl: null,
    updatedAt: '2021-03-20 06:03:20.942',
    editedAt: null,
    viewCount: 0,
    createdAt: '2021-03-20 06:03:20.941',
    minuteRead: null,
  },
  {
    status: 'PUBLISHED',
    content:
      'A sed sed aut unde qui odio quisquam deserunt impedit. Repudiandae soluta modi voluptas aut et ea id. Et quasi nam laudantium est esse voluptatem dolore architecto laboriosam. Voluptatem aut omnis voluptatibus. Cum odit et et.\n \rAmet nihil vero est eveniet odit quis ex. Quam voluptatem nostrum quidem excepturi. Quia cupiditate rerum eos natus eaque omnis qui explicabo. Cupiditate asperiores ut consequatur. Odio enim et consectetur et quos accusantium repudiandae.\n \rA voluptatum libero vitae similique corporis sit molestiae et. Quia velit autem in. Placeat amet minima temporibus. Vero eius voluptate accusamus consequuntur laboriosam nihil iure dolore natus. Sunt repellendus qui.\n \rTempora ut odio molestiae maiores inventore magnam ut iusto sit. Facilis voluptas sit ut. Pariatur natus debitis dicta consequuntur soluta corporis. Iste sit est quaerat occaecati et sit dolorem quisquam aut.\n \rMolestiae officiis totam magni recusandae expedita. Modi quia modi temporibus quod incidunt. Qui quod ratione repellat adipisci consequuntur quae in et maxime. Occaecati explicabo harum a.',
    id: 'e6bb959b-522e-4d37-a0d2-c52cb8139a98',
    ownerId: '4bca30f2-d2d6-4cb4-bc0a-ae6cccd78a1f',
    title: 'Product Branding Administrator',
    headerImageUrl: null,
    updatedAt: '2021-03-20 06:03:20.942',
    editedAt: null,
    viewCount: 0,
    createdAt: '2021-03-20 06:03:20.942',
    minuteRead: null,
  },
  {
    status: 'PUBLISHED',
    content:
      'A sed sed aut unde qui odio quisquam deserunt impedit. Repudiandae soluta modi voluptas aut et ea id. Et quasi nam laudantium est esse voluptatem dolore architecto laboriosam. Voluptatem aut omnis voluptatibus. Cum odit et et.\n \rAmet nihil vero est eveniet odit quis ex. Quam voluptatem nostrum quidem excepturi. Quia cupiditate rerum eos natus eaque omnis qui explicabo. Cupiditate asperiores ut consequatur. Odio enim et consectetur et quos accusantium repudiandae.\n \rA voluptatum libero vitae similique corporis sit molestiae et. Quia velit autem in. Placeat amet minima temporibus. Vero eius voluptate accusamus consequuntur laboriosam nihil iure dolore natus. Sunt repellendus qui.\n \rTempora ut odio molestiae maiores inventore magnam ut iusto sit. Facilis voluptas sit ut. Pariatur natus debitis dicta consequuntur soluta corporis. Iste sit est quaerat occaecati et sit dolorem quisquam aut.\n \rMolestiae officiis totam magni recusandae expedita. Modi quia modi temporibus quod incidunt. Qui quod ratione repellat adipisci consequuntur quae in et maxime. Occaecati explicabo harum a.',
    id: 'fa41d273-b73d-4991-83c3-ee279f06b58e',
    ownerId: '4bca30f2-d2d6-4cb4-bc0a-ae6cccd78a1f',
    title: 'Product Branding Administrator',
    headerImageUrl: null,
    updatedAt: '2021-03-20 06:03:20.942',
    editedAt: null,
    viewCount: 0,
    createdAt: '2021-03-20 06:03:20.941',
    minuteRead: null,
  },
];

type keys = keyof typeof Model.definitions.Post.properties;
const columns: Column<{
  status: string;
  content: string;
  id: string;
  ownerId: string;
  title: string;
  headerImageUrl: string | null;
  updatedAt: string;
  editedAt: string | null;
  viewCount: number;
  createdAt: string;
  minuteRead: string | null;
}>[] = Object.keys(Model.definitions.Post.properties).map((p) => ({
  Header: `${p.charAt(0).toUpperCase()}${p.slice(1)}`,
  accessor: p,
})) as Column<{
  status: string;
  content: string;
  id: string;
  ownerId: string;
  title: string;
  headerImageUrl: string | null;
  updatedAt: string;
  editedAt: string | null;
  viewCount: number;
  createdAt: string;
  minuteRead: string | null;
}>[];

const Dashboard = (): React.ReactElement => (
  <Layout>
    <Container>
      <Sidebar />
      <DashboardMain>
        <Table data={data} columns={columns} />
      </DashboardMain>
    </Container>
  </Layout>
);
export default Dashboard;
