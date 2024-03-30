import { FC } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

interface LoadingProps {
  isLoading: boolean;
  size?: number;
  className?: string;
  sx?: SerializedStyles;
}

const Root = styled('div')(({ r, sx }: any) => {
  return {
    display: 'grid',
    placeItems: 'center',
    placeContent: 'center',
    margin: '0 auto',
    fontSize: 12,
    ...sx
  }

})
const Spinner = styled('div')(({ r, sx }: any) => {
  return {
    display: "block",
    position: "relative",
    width: r * 10,
    height: r * 10,
    margin: '0 auto',

    '& div': {
      display: "inline-block",
      position: "absolute",
      width: r * 2,
      background: "var(--blue)",
      animation: "lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite"
    },
    "& div:nth-of-type(1)": {
      left: r,
      "animationDelay": "-0.24s"
    },
    "& div:nth-of-type(2)": {
      left: r * 4,
      "animationDelay": "-0.12s"
    },
    "& div:nth-of-type(3)": {
      left: r * 7,
      animationDelay: '0'
    },
    "@keyframes lds-facebook": {
      "0%": {
        top: r,
        height: r * 8
      },
      "50%, 100%": {
        top: r * 3,
        height: r * 4
      }
    }
  }
})


export const Loading: FC<LoadingProps> = (props) => {
  const { isLoading, className, sx = {}, size = 6 } = props;
  if (!isLoading) {
    return null;
  }

  return (
    <Root className={className} sx={sx}>
      <Spinner r={size}>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
    </Root>
  )
}
