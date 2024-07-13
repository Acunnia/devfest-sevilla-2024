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

import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { Sponsor } from '@lib/types';
import styles from './sponsors-grid.module.css';

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {

  return (
    <Link
      key={sponsor.name}
      href={`/expo/${sponsor.slug}`}
      role="button"
      tabIndex={0}
      className={cn(styles.card, {
        [styles.diamond]: sponsor.tier === 'diamond',
        [styles.gold]: sponsor.tier === 'gold'
      })}
    >
      <div className={styles.imageWrapper}>
        <Image
          alt={sponsor.name}
          src={sponsor.cardImage}
          className={cn(styles.image, {
            [styles.silver]: sponsor.tier === 'silver'
          })}
          loading="lazy"
          title={sponsor.name}
          width={900}
          height={500}
        />
      </div>
      {sponsor.tier !== 'colabora' && (
        <div className={styles.cardBody}>
          <div>
            <h2 className={styles.name}>{sponsor.name}</h2>
            <p className={styles.description}>{sponsor.description}</p>
          </div>
        </div>
      )}
    </Link>
  );
}

type Props = {
  sponsors: Sponsor[];
};

export default function SponsorsGrid({ sponsors }: Props) {
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');
  const diamondSponsors = sponsors.filter(s => s.tier === 'diamond');
  const platinumSponsors = sponsors.filter(s => s.tier === 'platinum');

  const otherSponsors = sponsors.filter(s => s.tier !== 'silver' && s.tier !== 'diamond' && s.tier !== 'platinum');

  return (
    <>
      <div className={styles.grid}>
        <h2 className={styles.textTier}>Organiza</h2>
        {otherSponsors.map(sponsor => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
      <div className={styles.grid}>
        <h2 className={styles.textTier}>Patrocinadores Diamante</h2>
        {diamondSponsors.map(sponsor => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
      <div className={styles.grid}>
        <h2 className={styles.textTier}>Patrocinadores Platino</h2>
        {platinumSponsors.map(sponsor => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
      <div className={styles.grid}>
        <h2 className={styles.textTier}>Patrocinadores Plata</h2>
        {silverSponsors.map(sponsor => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </>
  );
}
