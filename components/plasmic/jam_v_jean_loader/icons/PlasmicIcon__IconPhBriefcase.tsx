// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhBriefcaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhBriefcaseIcon(props: IconPhBriefcaseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.875 4.375H13.75V3.75a1.875 1.875 0 00-1.875-1.875h-3.75A1.875 1.875 0 006.25 3.75v.625H3.125a1.25 1.25 0 00-1.25 1.25v10a1.25 1.25 0 001.25 1.25h13.75a1.25 1.25 0 001.25-1.25v-10a1.25 1.25 0 00-1.25-1.25zM7.5 3.75a.625.625 0 01.625-.625h3.75a.625.625 0 01.625.625v.625h-5V3.75zm9.375 1.875v3.25a14.384 14.384 0 01-13.75 0v-3.25h13.75zm0 10H3.125v-5.34a15.641 15.641 0 0013.75-.001v5.341zM8.125 8.75a.625.625 0 01.625-.625h2.5a.625.625 0 110 1.25h-2.5a.625.625 0 01-.625-.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhBriefcaseIcon;
/* prettier-ignore-end */
