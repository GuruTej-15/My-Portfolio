import { ImageResponse } from 'next/og';

export const alt = 'GuruTej Pratap — Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FDFDFD',
          padding: '56px 72px',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          border: '14px solid #E9F6F5',
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                backgroundColor: '#E9F6F5',
                border: '1.5px solid #D8E5E3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#352A27',
                fontSize: '18px',
                fontWeight: 800,
              }}
            >
              GP
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#352A27',
                  letterSpacing: '-0.5px',
                }}
              >
                GURU TEJ PRATAP
              </span>
              <span
                style={{
                  fontSize: '11px',
                  color: '#90A9A6',
                  fontFamily: 'monospace',
                  letterSpacing: '1px',
                }}
              >
                MINT SYSTEMS // ENGINEERING
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: '#E9F6F5',
              border: '1px solid #D8E5E3',
              fontSize: '12px',
              fontFamily: 'monospace',
              color: '#352A27',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '9999px',
                backgroundColor: '#2E8B57',
              }}
            />
            <span>LPU PUNJAB // B.TECH CSE</span>
          </div>
        </div>

        {/* Main Title & Identity */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 14px',
              borderRadius: '6px',
              backgroundColor: '#E9F6F5',
              border: '1px solid #D8E5E3',
              fontSize: '13px',
              fontWeight: 700,
              color: '#986953',
              alignSelf: 'flex-start',
              fontFamily: 'monospace',
            }}
          >
            FULL-STACK DEVELOPER
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: '#352A27',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              maxWidth: '980px',
            }}
          >
            Building Digital Systems with Engineering Rigor.
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#675B57',
              maxWidth: '880px',
              lineHeight: 1.4,
            }}
          >
            Full-stack platforms, OS concurrency synchronizers, heap triage algorithms, and cloud-native DevOps overlays.
          </div>
        </div>

        {/* Footer with key metrics / project proof */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
            borderTop: '1px solid #D8E5E3',
          }}
        >
          <div style={{ display: 'flex', gap: '28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '11px', color: '#90A9A6', fontFamily: 'monospace' }}>
                RECORDHUB
              </span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#352A27' }}>
                Next.js 16 • httpOnly Auth
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '11px', color: '#90A9A6', fontFamily: 'monospace' }}>
                OS SIMULATOR
              </span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#352A27' }}>
                ANSI C • POSIX Lock Simulation
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '11px', color: '#90A9A6', fontFamily: 'monospace' }}>
                BLOOD BANK
              </span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#352A27' }}>
                O(log n) Heap Priority Queue
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '11px', color: '#90A9A6', fontFamily: 'monospace' }}>
                DEVOPS PLATFORM
              </span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#352A27' }}>
                Kubernetes • Argo CD • AES-256
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: '13px',
              fontFamily: 'monospace',
              color: '#986953',
              fontWeight: 700,
            }}
          >
            gurutejpratap.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
