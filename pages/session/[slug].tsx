/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GetStaticProps, GetStaticPaths } from 'next';

import Page from '@components/page';
import SessionSection from '@components/session-section';
import Layout from '@components/layout';

import { getAllTalks } from '@lib/cms-api';
import { Talk } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  session: Talk;
};

export default function SessionPage({ session }: Props) {
  const meta = {
    title: `${session.title} - DevFest Sevilla 2024}`,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <SessionSection session={session} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const sessions = await getAllTalks();
  const currentSession = sessions?.find((s: Talk) => s.slug === slug) || null;

  if (!currentSession) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      session: currentSession
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sessions = await getAllTalks();
  const slugs = sessions?.map((s: Talk) => ({ params: { slug: s.slug } })) || [];

  return {
    paths: slugs,
    fallback: false
  };
};
