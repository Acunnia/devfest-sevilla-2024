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

export const SITE_URL = 'https://devfest24.gdgsevilla.com'; //TODO: Update this URL
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'GDGSevilla';
export const BRAND_NAME = 'GDG Sevilla';
export const SITE_NAME_MULTILINE = ['DevFest', 'Sevilla'];
export const SITE_NAME = 'DevFest Sevilla 2024';
export const META_DESCRIPTION =
  'DevFest Sevilla es una conferencia tecnológica organizada por Google Developers Group Sevilla. Ofrecemos charlas, talleres y laboratorios sobre las últimas tecnologías de Google. Únete a nosotros para aprender y conectar con expertos del sector.';
export const SITE_DESCRIPTION =
  'Tecnología, Comunidad, Diversión.';
export const DATE = '24 Noviembre 2024';
export const SHORT_DATE = 'Nov 24 - 10:00am PST';
export const FULL_DATE = 'Nov 24th 10am Pacific Time (GMT+1)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = "https://devfest24.gdgsevilla.com/legal";
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://developers.google.com/events/gdd-europe/code-of-conduct?hl=es-419';
export const REPO = 'https://github.com/vercel/virtual-event-starter-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Ponentes',
    route: '/speakers'
  },
  {
    name: 'Agenda',
    route: '/schedule'
  },
  {
    name: 'Equipo',
    route: '/team'
  },
  {
    name: 'Partners',
    route: '/expo'
  },
  {
    name: 'Edición 2019',
    route: 'https://devfest19.gdgsevilla.com'
  },
  /*,
  {
    name: '100ms Stage',
    route: '/stage/m'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Jobs',
    route: '/'
  }*/
];

export type TicketGenerationState = 'default' | 'loading';
