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

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';
import LinkButton from './hms/LinkButton';


export default function LearnMore() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact, styles.btn_container)}>
      <LinkButton
        className={cn(styles.button, styles.register, 'px-12', 'mb-2')}
        href='https://entradium.com/events/devfest-sevilla-2024'
      >
        Compra tus entradas
      </LinkButton>
      <LinkButton className={cn(styles.speakers) + " px-12 mb-2"} href={`/speakers`}>
        Conoce a los speakers
      </LinkButton>
    </div>
  );
}
