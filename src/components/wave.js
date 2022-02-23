import React, { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import DrawSVGPlugin from 'gsap/all'
import MotionPathPlugin from 'gsap/all'
import Warp from 'warpjs'

const Wave = () => {
  const svg = useRef()
  const warp = useRef()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!warp.current) {
      return
    }

    warp.current.transform(([x, y, oy]) => [
      x,
      oy + 25 * Math.sin(x / 80 + offset),
      oy,
    ])
    setOffset((offset) => offset + 0.1)
  }, [offset])

  useEffect(() => {
    if (svg.current) {
      warp.current = new Warp(svg.current)
      warp.current.interpolate(30)
      warp.current.transform(([x, y]) => [x, y, y])
      setOffset(0.1)
    }
  }, [])

  return (
    <>
      {/* <style>{`
            @keyFrames lineAnimation {
                0% {
                    stroke-dashoffset: 0;
                }
                100% {
                    stroke-dashoffset: 10;
                }
            }
            #svg path {
                animation: lineAnimation 1.5s linear infinite running;
                will-change: stroke-dashoffset;
            }
        `}</style> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2435.63 1009.33"
        id="svg"
        ref={svg}
      >
        <defs>
          <clipPath id="a" transform="translate(194.79 -56.77)">
            <path style={{ fill: 'none' }} d="M0 0h1981.11v1114.38H0z" />
          </clipPath>
        </defs>
        <g data-name="Calque 2">
          <g style={{ clipPath: 'url(#a)' }} data-name="Layer 1">
            <g style={{ opacity: '.75' }}>
              <path
                d="M-192.79 106.94s517.64-140.4 738.51 50.89S549.53 705.39 1334 498.3s906.33 54.41 906.33 54.41"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 113.82S327-31.21 553.14 158.51s-5 545 771.88 346.74 913.92 51.86 913.92 51.86"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.03px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 120.71S329.15-29 560.57 159.18s-13.77 542.4 755.47 353 921.5 49.33 921.5 49.33"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.05px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 127.59S331.3-26.71 568 159.86s-22.56 539.82 739.07 359.28 929.08 46.78 929.08 46.78"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.08px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 134.48s526.23-158.94 768.2 26.05-31.35 537.24 722.66 365.55 936.67 44.25 936.67 44.25"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.1px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 141.36s528.38-163.57 775.62 19.85S542.7 695.87 1289.09 533s944.25 41.7 944.25 41.7"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.13px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 148.25S337.74-20 590.25 161.88 541.33 694 1280.11 540s951.83 39.17 951.83 39.17"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.15px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 155.13s532.68-172.84 790.46 7.43-57.67 529.5 673.45 384.36 959.42 36.62 959.42 36.62"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.18px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 162S342-15.46 605.09 163.23s-66.49 526.93 657.05 390.63 967 34.08 967 34.08"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.21px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 168.9s537-182.11 805.3-5-75.28 524.34 640.65 396.9 974.57 31.54 974.57 31.54"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.23px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 175.79S346.33-11 619.93 164.58s-84.07 521.77 624.24 403.18 982.16 29 982.16 29"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.26px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 182.67S348.48-8.71 627.35 165.26s-92.86 519.18 607.84 409.44 989.74 26.46 989.74 26.46"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.28px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 189.56s543.42-196 827.56-23.63-101.64 516.61 591.44 415.72 997.32 23.91 997.32 23.91"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.31px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 196.44s545.57-200.65 835-29.83-110.44 514 575 422S2222.13 610 2222.13 610"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.33px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 203.33S354.93-2 649.62 167.28s-119.23 511.45 558.62 428.26 1012.49 18.83 1012.49 18.83"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.36px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 210.21S357.07.29 657 168s-128 508.82 542.26 434.48 1020.07 16.3 1020.07 16.3"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.38px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 217.1s552-214.56 857.25-48.47-136.8 506.29 525.81 440.8 1027.66 13.75 1027.66 13.75"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.41px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 224S361.37 4.79 671.88 169.31 526.29 673 1181.29 616.37s1035.24 11.22 1035.24 11.22"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.44px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 230.87S363.52 7 679.3 170s-154.38 501.13 493 453.34S2215.12 632 2215.12 632"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.46px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 237.75S365.67 9.29 686.72 170.66s-163.16 498.55 476.6 459.6 1050.4 6.14 1050.4 6.14"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.49px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 244.64s560.6-233.1 886.93-73.31-171.95 496 460.2 465.88 1058 3.59 1058 3.59"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.51px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 251.52S370 13.79 701.56 172s-180.74 493.4 443.8 472.15 1065.56 1.05 1065.56 1.05"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.54px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 258.41S372.11 16 709 172.68 519.46 663.49 1136.37 651.1s1073.15-1.49 1073.15-1.49"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.56px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 265.29s567.05-247 909.2-91.93S518.09 661.59 1127.39 658s1080.73-4 1080.73-4"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.59px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 272.18S376.41 20.54 723.83 174s-207.11 485.68 394.58 491 1088.31-6.57 1088.31-6.57"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.62px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 279.06s571.35-256.27 924-104.35-215.85 483.07 378.21 497.22 1095.9-9.11 1095.9-9.11"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.64px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 286S380.7 25 738.67 175.38 514 655.87 1100.44 678.88s1103.48-11.65 1103.48-11.65"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.67px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 292.83S382.85 27.29 746.09 176.06 512.62 654 1091.46 685.82s1111.06-14.19 1111.06-14.19"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.69px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 299.72S385 29.54 753.51 176.73s-242.26 475.34 329 516S2201.11 676 2201.11 676"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.72px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 306.6S387.15 31.79 760.93 177.41s-251 472.75 312.56 522.3 1126.22-19.27 1126.22-19.27"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.74px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 313.49S389.3 34 768.35 178.08s-259.83 470.18 296.16 528.58 1133.8-21.81 1133.8-21.81"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.77px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 320.37S391.44 36.29 775.77 178.76 507.15 646.35 1055.52 713.6s1141.39-24.35 1141.39-24.35"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.79px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 327.26s586.38-288.72 976-147.83-277.4 465 263.35 541.12 1149-26.89 1149-26.89"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.82px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 334.14s588.53-293.35 983.41-154-286.2 462.4 246.94 547.36 1156.55-29.44 1156.55-29.44"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.85px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 341S397.89 43 798 180.78s-295 459.86 230.53 553.66 1164.14-32 1164.14-32"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.87px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 347.91S400 45.29 805.46 181.46s-303.77 457.27 214.13 559.93 1171.72-34.52 1171.72-34.52"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.9px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 354.8s595-307.26 1005.67-172.67-312.56 454.7 197.73 566.2 1179.3-37.06 1179.3-37.06"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.92px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 361.68S404.33 49.79 820.3 182.81 499 634.92 1001.63 755.28s1186.88-39.6 1186.88-39.6"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.95px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 368.57S406.48 52 827.72 183.48 497.58 633 992.64 762.22s1194.46-42.14 1194.46-42.14"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '1.97px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 375.45S408.63 54.29 835.14 184.16s-338.92 447 148.52 585 1202-44.68 1202-44.68"
                transform="translate(194.79 -56.77)"
                style={{
                  strokeWidth: '2px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  stroke: '#c396f7',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 378.56s439.88-228.33 825.11-212.19c67.25 3 133.21 13.74 196 33.49 417.15 131.22-324 440.81 160.11 576.38 481 135.21 1185.68-42.82 1197.25-43.92"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#c595f5',
                  strokeWidth: '2.05px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 381.66c0 .09 443.71-225.07 821.22-202.54a773.4 773.4 0 0 1 193.1 36.44c407.8 132.48-309 434.67 171.72 567.75 474.64 132.37 1169.32-40.95 1192.45-43.15"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#c695f3',
                  strokeWidth: '2.1px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 384.77c0 .13 447.53-221.14 817.34-192.9 64.84 4.95 128.36 18.67 190.17 39.4C1213.17 364.9 520.67 659.78 998 790.37c468.29 129.55 1153-39.08 1187.7-42.37"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#c894f2',
                  strokeWidth: '2.15px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 387.87c0 .18 451.37-217.18 813.46-183.24 63.63 6 125.92 21.11 187.25 42.34 389.1 134.7-279.11 422.37 194.91 550.47 461.85 126.71 1136.6-37.22 1182.87-41.61"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#c994f0',
                  strokeWidth: '2.21px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 391c0 .22 455.23-213.21 809.58-173.6 62.43 7 123.48 23.56 184.32 45.29 379.76 135.66-263.85 415.11 206.52 541.84 455.74 122.8 1120.23-35.35 1178.07-40.84"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#cb93ee',
                  strokeWidth: '2.26px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 394.08c0 .27 459.11-209.21 805.7-163.95 61.23 8 121 26 181.39 48.24 370.42 136.53-248.84 408.76 218.12 533.21 449.39 119.77 1103.87-33.49 1173.28-40.07"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#cc92ec',
                  strokeWidth: '2.31px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 397.19c0 .31 463-205.2 801.81-154.3 60.05 9 118.59 28.42 178.48 51.19 361.08 137.28-233.84 402.41 229.71 524.57 443 116.76 1087.51-31.63 1168.49-39.31"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#ce92ea',
                  strokeWidth: '2.36px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 400.29c0 .36 466.93-201.15 797.93-144.65 58.86 10.05 116.13 30.84 175.55 54.14C1132.46 447.72 561.85 705.86 1022 825.72c436.69 113.75 1071.15-29.72 1163.7-38.54"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#cf91e8',
                  strokeWidth: '2.41px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 403.4c0 .4 470.87-197.08 794.05-135 57.67 11.08 113.67 33.25 172.63 57.09C1116.34 464 570 715.23 1026.8 832.79c430.32 110.75 1054.79-27.9 1158.9-37.77"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#d191e7',
                  strokeWidth: '2.46px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 406.5c0 .45 474.83-193 790.17-125.35 56.49 12.11 111.2 35.65 169.7 60 333.16 138.92-188.85 383.42 264.51 498.67 424 107.77 1038.43-26 1154.11-37"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#d290e5',
                  strokeWidth: '2.51px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 409.61c0 .49 478.81-188.83 786.28-115.71 55.32 13.15 108.75 38 166.78 63 323.89 139.25-173.86 377.11 276.12 490C1454 951.73 2058.45 822.76 2185.7 810.69"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#d490e3',
                  strokeWidth: '2.56px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 412.71c0 .54 482.8-184.64 782.4-106.06 54.15 14.2 106.28 40.42 163.86 65.94C1068.1 512.05 594.59 743.4 1041.18 854c411.21 101.83 1005.7-22.31 1144.52-35.47"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#d58fe1',
                  strokeWidth: '2.62px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 415.82c0 .58 486.81-180.42 778.52-96.42 53 15.26 103.8 42.79 160.93 68.89 305.4 139.57-143.9 364.52 299.31 472.78 404.84 98.88 989.34-20.44 1139.73-34.71"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#d78edf',
                  strokeWidth: '2.67px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 418.92c0 .63 490.84-176.15 774.64-86.76 51.81 16.32 101.33 45.14 158 71.84 296.2 139.55-128.91 358.23 310.92 464.14 398.45 95.94 973-18.58 1134.93-33.94"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#d88ede',
                  strokeWidth: '2.72px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 422c0 .67 494.87-171.84 770.76-77.12 50.64 17.39 98.85 47.48 155.08 74.79 287 139.42-113.94 352 322.51 455.51 392.07 93 956.61-16.72 1130.14-33.18"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#da8ddc',
                  strokeWidth: '2.77px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 425.13c0 .72 498.91-167.46 766.87-67.47 49.49 18.47 96.39 49.81 152.16 77.74 277.87 139.18-99 345.71 334.11 446.88 385.68 90.09 940.26-14.85 1125.35-32.41"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#db8dda',
                  strokeWidth: '2.82px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 428.24c0 .76 503-163 763-57.82 48.33 19.55 93.92 52.11 149.24 80.69 268.75 138.81-84 339.45 345.71 438.24 379.29 87.19 923.89-13 1120.55-31.64"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#dd8cd8',
                  strokeWidth: '2.87px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 431.34c0 .81 507-158.56 759.11-48.17 47.17 20.65 91.45 54.41 146.31 83.64 259.67 138.34-69 333.22 357.31 429.61 372.89 84.3 907.53-11.13 1115.76-30.88"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#de8bd6',
                  strokeWidth: '2.92px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 434.45c0 .85 511-154 755.23-38.53 46 21.76 89 56.69 143.38 86.59 250.64 137.75-54.08 327 368.91 421 366.5 81.43 891.17-9.25 1111-30.1"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#e08bd4',
                  strokeWidth: '2.97px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 437.55c0 .9 515.07-149.42 751.34-28.87 44.85 22.88 86.53 58.95 140.47 89.53 241.64 137-39.13 320.79 380.51 412.34 360.09 78.57 874.8-7.39 1106.17-29.33"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#e18ad3',
                  strokeWidth: '3.03px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 440.66c0 .94 519.08-144.76 747.46-19.23 43.68 24 84.07 61.19 137.54 92.49 232.7 136.21-24.17 314.59 392.11 403.7 353.69 75.72 858.44-5.52 1101.38-28.57"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#e38ad1',
                  strokeWidth: '3.08px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 443.76c0 1 523.07-140 743.58-9.58 42.51 25.15 81.62 63.41 134.62 95.44 223.81 135.27-9.23 308.41 403.7 395.07 347.28 72.88 842.08-3.66 1096.59-27.8"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#e489cf',
                  strokeWidth: '3.13px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 446.87c0 1 527-135.25 739.7.07 41.34 26.3 79.19 65.61 131.69 98.38 215 134.22 5.72 302.25 415.31 386.44 340.86 70.06 825.72-1.8 1091.79-27"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#e688cd',
                  strokeWidth: '3.18px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 450c0 1.08 531-130.4 735.82 9.72 40.15 27.47 76.76 67.78 128.76 101.34 206.2 133 20.66 296.1 426.91 377.8 334.45 67.26 809.36.07 1087-26.27"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#e788cb',
                  strokeWidth: '3.23px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 453.08c0 1.12 534.85-125.5 731.93 19.36 39 28.65 74.36 69.94 125.85 104.29 197.49 131.77 35.59 290 438.5 369.17 328 64.47 793 1.93 1082.21-25.5"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#e987c9',
                  strokeWidth: '3.28px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 456.18c0 1.17 538.69-120.54 728.05 29 37.77 29.83 72 72.05 122.92 107.23C847 722.82 708.71 876.31 1108.29 953c321.6 61.7 776.63 3.79 1077.41-24.73"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#ea87c8',
                  strokeWidth: '3.33px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 459.29c0 1.21 542.47-115.53 724.17 38.66 36.56 31 69.6 74.15 120 110.18C831.66 737 716.83 885.93 1113.08 960c315.18 59 760.27 5.66 1072.62-24"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#ec86c6',
                  strokeWidth: '3.38px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 462.39c0 1.26 546.19-110.48 720.29 48.31 35.34 32.24 67.25 76.21 117.07 113.14 171.79 127.33 80.43 271.73 473.3 343.27 308.75 56.21 743.91 7.52 1067.83-23.2"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#ed85c4',
                  strokeWidth: '3.44px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 465.5c0 1.3 549.85-105.4 716.41 58 34.1 33.44 64.93 78.23 114.14 116.08 163.39 125.66 95.3 265.7 484.91 334.64 302.31 53.49 727.54 9.39 1063-22.44"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#ef85c2',
                  strokeWidth: '3.49px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 468.6c0 1.35 553.44-100.28 712.52 67.61 32.85 34.67 62.66 80.23 111.23 119 155.08 123.9 110.21 259.7 496.5 326 295.88 50.79 711.19 11.25 1058.24-21.67"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#f084c0',
                  strokeWidth: '3.54px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 471.71c0 1.39 557-95.15 708.64 77.25 31.58 35.9 60.41 82.19 108.3 122C771 793 749.28 924.66 1132.25 988.32c289.45 48.11 694.83 13.11 1053.45-20.9"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#f284bf',
                  strokeWidth: '3.59px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 474.81c0 1.44 560.39-90 704.76 86.91 30.3 37.12 58.21 84.1 105.37 124.93 138.76 120.14 140 247.76 519.71 308.74 283 45.44 678.46 15 1048.65-20.14"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#f383bd',
                  strokeWidth: '3.64px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 477.92c0 1.48 563.75-84.86 700.88 96.55 29 38.36 56.07 86 102.45 127.88 130.76 118.17 154.94 241.85 531.3 300.11 276.57 42.8 662.1 16.84 1043.86-19.37"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#f583bb',
                  strokeWidth: '3.69px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 481c0 1.53 567-79.71 697 106.2 27.68 39.6 54 87.8 99.53 130.84 122.89 116.14 169.85 236 542.9 291.47 270.13 40.18 645.74 18.7 1039.07-18.6"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#f682b9',
                  strokeWidth: '3.74px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 484.13c0 1.57 570.24-74.59 693.11 115.85 26.35 40.82 52 89.56 96.6 133.78 115.14 114.09 184.75 230.12 554.51 282.83 263.68 37.59 629.37 20.58 1034.27-17.83"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#f881b7',
                  strokeWidth: '3.79px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 487.23c0 1.62 573.38-69.48 689.23 125.5 25 42.06 50.05 91.29 93.68 136.73 107.53 112 199.65 224.32 566.1 274.2 257.24 35 613 22.44 1029.48-17.06"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#f981b5',
                  strokeWidth: '3.85px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 490.34c0 1.66 576.44-64.42 685.35 135.14 23.62 43.28 48.22 93 90.75 139.68C683.38 875.09 797.86 983.73 1161 1030.73c250.8 32.46 596.65 24.31 1024.69-16.29"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#fb80b4',
                  strokeWidth: '3.9px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 493.44c0 1.71 579.44-59.39 681.47 144.79 22.23 44.51 46.49 94.58 87.83 142.64 92.76 107.86 229.38 213.34 589.3 256.93 244.31 30.27 580.29 26.17 1019.89-15.53"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#fc80b2',
                  strokeWidth: '3.95px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
              <path
                d="M-192.79 496.55c0 1.75 582.38-54.41 677.58 154.44s257.66 516 1700.91 379.12"
                transform="translate(194.79 -56.77)"
                style={{
                  stroke: '#ff80b0',
                  strokeWidth: '4px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '.1 10',
                  fill: 'none',
                }}
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}

export default Wave
