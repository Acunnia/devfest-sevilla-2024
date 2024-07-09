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
import SpeakerSection from '@components/speaker-section';
import Layout from '@components/layout';

import { getAllSpeakers } from '@lib/cms-api';
import { Speaker, TeamMember } from '@lib/types';
import { META_DESCRIPTION, SITE_NAME } from '@lib/constants';
import TeamMemberSection from '@components/team-section';
import { getAllTeamMembers } from '@lib/cms-providers/storyblok';

type Props = {
    speaker: TeamMember;
};

export default function TeamMemberPage({ speaker }: Props) {
    const meta = {
        title: `${speaker.name} - ${SITE_NAME}`,
        description: META_DESCRIPTION
    };

    return (
        <Page meta={meta}>
            <Layout>
                <TeamMemberSection teamMember={speaker} />
            </Layout>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const slug = params?.slug;
    const speakers = await getAllTeamMembers();
    const currentSpeaker = speakers.find((s: TeamMember) => s.slug === slug) || null;

    if (!currentSpeaker) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            speaker: currentSpeaker
        },
        revalidate: 6000
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const speakers = await getAllTeamMembers();
    const slugs = speakers.map((s: TeamMember) => ({ params: { slug: s.slug } }));

    return {
        paths: slugs,
        fallback: false
    };
};