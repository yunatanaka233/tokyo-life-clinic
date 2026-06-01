'use client'

import { useState } from 'react'
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer'

type TabKey = 'beauty' | 'diet'

const TABS: { key: TabKey; label: string }[] = [
  { key: 'beauty', label: 'イソトレチノイン' },
  { key: 'diet',   label: 'メディカルダイエット' },
]

const MENU_DATA: Record<TabKey, {
  description: string
  ctaHref: string
  rows: { name: string; dose: string; target: string; price: string }[]
}> = {
  beauty: {
    ctaHref: 'https://www.tokyo-life-online-clinic.com/lp/002_01',
    description:
      '肌荒れ・ニキビ・皮脂の過剰分泌にお悩みの方へ。医師が処方するイソトレチノインで、本格的な肌改善を目指します。',
    rows: [
      { name: 'イソトレチノイン', dose: '10mg', target: '軽度〜中等度のニキビ', price: '¥5,000〜 / 月（定期配送）' },
      { name: 'イソトレチノイン', dose: '20mg', target: '中等度〜重度のニキビ', price: '¥7,000〜 / 月（定期配送）' },
    ],
  },
  diet: {
    ctaHref: 'https://www.tokyo-life-online-clinic.com/lp/001_01',
    description:
      'GLP-1/GIP受容体作動薬「マンジャロ」で科学的に食欲をコントロール。医師の管理のもと、安全に体重管理を行います。',
    rows: [
      { name: 'マンジャロ', dose: '2.5mg', target: '導入期（初期用量）', price: '¥16,000〜 / 月（定期配送）' },
      { name: 'マンジャロ', dose: '5mg',   target: '維持期',             price: '¥28,000〜 / 月（定期配送）' },
      { name: 'マンジャロ', dose: '7.5mg', target: '強化期（医師判断）', price: '¥39,000〜 / 月（定期配送）' },
    ],
  },
}

export function MenuSection() {
  const [active, setActive] = useState<TabKey>('beauty')
  const data = MENU_DATA[active]

  return (
    <section
      style={{
        padding: '100px 80px',
        backgroundColor: '#fff',
      }}
      className="section-pad"
    >
      {/* Section title */}
      <div style={{ marginBottom: 56 }}>
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 13,
            fontWeight: 300,
            color: '#7A8F9A',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          Treatment Menu
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 2.8vw, 40px)',
            fontWeight: 400,
            color: '#1A3A4A',
          }}
        >
          施術メニュー
        </h2>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid #D6EEF7',
          marginBottom: 48,
        }}
      >
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            style={{
              padding: '12px 32px',
              fontSize: 14,
              fontWeight: active === key ? 500 : 400,
              color: active === key ? '#1A3A4A' : '#7A8F9A',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: active === key ? '2px solid #5BC8E8' : '2px solid transparent',
              cursor: 'pointer',
              letterSpacing: '0.05em',
              transition: 'color 0.2s, border-color 0.2s',
              marginBottom: -1,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'start',
        }}
        className="menu-grid"
      >
        {/* Left: description + CTA */}
        <div>
          <p
            style={{
              fontSize: 15,
              color: '#2C3E50',
              lineHeight: 1.9,
              marginBottom: 40,
            }}
          >
            {data.description}
          </p>
          <a
            href={data.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: '#5BC8E8',
              color: '#fff',
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              borderRadius: 4,
            }}
          >
            詳しく見る
          </a>
        </div>

        {/* Right: drug table */}
        <div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 14,
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#E8F8FD' }}>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '12px 16px',
                    fontWeight: 500,
                    color: '#1A3A4A',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    borderBottom: '1px solid #D6EEF7',
                  }}
                >
                  薬剤名
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '12px 16px',
                    fontWeight: 500,
                    color: '#1A3A4A',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    borderBottom: '1px solid #D6EEF7',
                  }}
                >
                  用量
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '12px 16px',
                    fontWeight: 500,
                    color: '#1A3A4A',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    borderBottom: '1px solid #D6EEF7',
                  }}
                >
                  対象
                </th>
                <th
                  style={{
                    textAlign: 'right',
                    padding: '12px 16px',
                    fontWeight: 500,
                    color: '#1A3A4A',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    borderBottom: '1px solid #D6EEF7',
                  }}
                >
                  価格（税込）
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={`${row.name}-${row.dose}`}>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #D6EEF7',
                      color: '#2C3E50',
                    }}
                  >
                    {row.name}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #D6EEF7',
                      color: '#2C3E50',
                    }}
                  >
                    {row.dose}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #D6EEF7',
                      color: '#7A8F9A',
                      fontSize: 13,
                    }}
                  >
                    {row.target}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #D6EEF7',
                      color: '#2C3E50',
                      fontSize: 13,
                      textAlign: 'right',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <MedicalDisclaimer />

      <style>{`
        @media (max-width: 768px) {
          .section-pad { padding: 60px 24px !important; }
          .menu-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
