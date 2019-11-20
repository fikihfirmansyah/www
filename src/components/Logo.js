import React from 'react'
import styled from 'styled-components'
import { Svg as BaseSvg } from './Icon'
import { colors, breakpoints, vw } from '../style'

const Svg = styled(BaseSvg)`
  width: ${164 / 7.68}vw;
  min-width: 112px;
  height: auto;
  color: ${colors.dark};

  @media screen and ${breakpoints.medium} {
    width: ${vw(188)};
  }
`

export default function Logo() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.896 25.367">
      <title>Strateg Marknadsföring</title>
      <g transform="translate(0.1)">
        <path
          className="a"
          d="M11.464,5.6a3.964,3.964,0,0,0-4.1-3.171c-2.238,0-3.73,1.492-3.73,3.171a2.948,2.948,0,0,0,2.425,2.8l2.8.56c3.171.746,5.036,2.8,5.036,5.409,0,2.984-2.611,5.782-6.715,5.782-4.663,0-6.9-2.984-7.274-5.782l2.611-.746a4.292,4.292,0,0,0,4.663,4.1c2.8,0,4.1-1.492,4.1-3.171a3.14,3.14,0,0,0-2.8-2.984L5.682,11c-2.8-.56-4.85-2.425-4.85-5.223C.833,2.8,3.63,0,7.361,0c4.29,0,6.155,2.611,6.528,4.85Z"
          transform="translate(0)"
        />
        <path
          className="a"
          d="M13.236,5.4h2.8V7.642h-2.8v6.9A1.673,1.673,0,0,0,15.1,16.408a1.4,1.4,0,0,0,.933-.187V18.46a14.464,14.464,0,0,1-1.679.187,3.431,3.431,0,0,1-3.73-3.73V7.828H8.2V5.4h.746A1.862,1.862,0,0,0,11,3.352V1.3h2.425V5.4Z"
          transform="translate(7.181 1.125)"
        />
        <path
          className="a"
          d="M21.374,6.111H20.255c-2.238,0-3.544,1.119-3.544,4.1v6.528H14.1V3.687h2.425V5.925A3.963,3.963,0,0,1,20.442,3.5h.933Z"
          transform="translate(12.286 3.028)"
        />
        <path
          className="a"
          d="M23,9.455l3.544-.56c.746-.187.933-.56.933-.933,0-1.306-.933-2.425-2.8-2.425A2.765,2.765,0,0,0,21.7,8.15l-2.425-.56c.187-2.425,2.611-4.29,5.409-4.29,3.917,0,5.409,2.238,5.409,4.85v6.528c0,1.119.187,1.865.187,2.238H27.853a14.463,14.463,0,0,1-.187-1.679,4.792,4.792,0,0,1-4.29,2.238A4.21,4.21,0,0,1,18.9,13.559,4.137,4.137,0,0,1,23,9.455Zm4.663,1.865v-.746l-3.917.56a1.961,1.961,0,0,0,.187,3.917C25.988,15.051,27.667,14.118,27.667,11.32Z"
          transform="translate(16.439 2.855)"
        />
        <path
          className="a"
          d="M31.236,5.4h2.8V7.642h-2.8v6.9A1.673,1.673,0,0,0,33.1,16.408a1.4,1.4,0,0,0,.933-.187V18.46a14.464,14.464,0,0,1-1.679.187,3.431,3.431,0,0,1-3.73-3.73V7.828H26.2V5.4h.746A1.862,1.862,0,0,0,29,3.352V1.3h2.425V5.4Z"
          transform="translate(22.755 1.125)"
        />
        <path
          className="a"
          d="M43.9,13.186a6.013,6.013,0,0,1-5.969,4.1c-3.544,0-6.528-2.611-6.528-7.088,0-4.1,2.984-6.9,6.342-6.9,4.1,0,6.342,2.8,6.342,6.9v.746H34.2a3.72,3.72,0,0,0,3.917,3.917,3.706,3.706,0,0,0,3.73-2.611ZM41.286,8.9a3.283,3.283,0,0,0-3.544-3.357A3.387,3.387,0,0,0,34.2,8.9Z"
          transform="translate(27.255 2.855)"
        />
        <path
          className="a"
          d="M41.825,16.83A3.355,3.355,0,0,0,45.369,20c2.8,0,3.917-1.492,3.917-4.29V13.845a4.459,4.459,0,0,1-3.917,2.238c-3.544,0-5.969-2.611-5.969-6.342C39.4,6.2,41.825,3.4,45.369,3.4a4.3,4.3,0,0,1,4.1,2.052V3.587h2.611V15.711c0,3.357-1.679,6.528-6.528,6.528-3.357,0-5.782-2.052-5.969-4.85Zm7.834-7.088c0-2.611-1.492-4.1-3.73-4.1s-3.73,1.679-3.73,4.1c0,2.611,1.492,4.1,3.73,4.1C47.98,14.032,49.659,12.353,49.659,9.742Z"
          transform="translate(34.176 2.942)"
        />
        <path
          className="a"
          d="M63.83,14.189H55.25L53.2,19.6H50.4L58.047.2h2.984l7.647,19.4h-2.8Zm-7.647-2.425H62.9L59.54,3.184Z"
          transform="translate(43.694 0.173)"
        />
        <path
          className="a"
          d="M63.425,16.83A3.355,3.355,0,0,0,66.969,20c2.8,0,3.917-1.492,3.917-4.29V13.845a4.459,4.459,0,0,1-3.917,2.238C63.425,16.084,61,13.472,61,9.742,61,6.2,63.425,3.4,66.969,3.4a4.3,4.3,0,0,1,4.1,2.052V3.587h2.611V15.711c0,3.357-1.679,6.528-6.528,6.528-3.357,0-5.782-2.052-5.969-4.85Zm7.647-7.088c0-2.611-1.492-4.1-3.73-4.1s-3.73,1.679-3.73,4.1c0,2.611,1.492,4.1,3.73,4.1C69.58,14.032,71.072,12.353,71.072,9.742Z"
          transform="translate(52.865 2.942)"
        />
        <path
          className="a"
          d="M81.8,13.186a6.013,6.013,0,0,1-5.969,4.1c-3.544,0-6.528-2.611-6.528-7.088,0-4.1,2.984-6.9,6.342-6.9,4.1,0,6.342,2.8,6.342,6.9v.746H72.1a3.939,3.939,0,0,0,7.647,1.306ZM79.186,8.9a3.283,3.283,0,0,0-3.544-3.357A3.387,3.387,0,0,0,72.1,8.9Z"
          transform="translate(60.047 2.855)"
        />
        <path
          className="a"
          d="M80.411,16.83H77.8V3.773h2.425V5.638a4.319,4.319,0,0,1,4.1-2.238c3.171,0,4.663,2.238,4.663,5.223v8.394H86.38V9c0-1.865-.746-3.357-2.984-3.357-2.052,0-2.984,1.679-2.984,3.544Z"
          transform="translate(67.401 2.942)"
        />
        <path
          className="a"
          d="M88.011,10.215c0,2.984,1.865,4.663,3.917,4.663a3.823,3.823,0,0,0,3.73-2.611L97.9,13.2a5.932,5.932,0,0,1-5.969,4.1A6.58,6.58,0,0,1,85.4,10.4c0-4.1,2.8-6.9,6.528-6.9a5.685,5.685,0,0,1,5.782,4.1l-2.238.933a3.5,3.5,0,0,0-3.544-2.8C89.877,5.552,88.011,7.044,88.011,10.215Z"
          transform="translate(73.977 3.028)"
        />
        <path
          className="a"
          d="M94.938,22.066l3.357-6.9L92.7,3.6h2.984l4.1,8.953L103.7,3.6h2.8l-8.58,18.652H94.938Z"
          transform="translate(80.293 3.115)"
        />
      </g>
    </Svg>
  )
}
