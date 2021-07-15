import React from "react";

export const CloseIcon = (props: { color?: string }) => {
    const { color } = props;
    return (
      <svg width="16" height="16" viewBox="0 0 16 16">
        <g fill={color || "#32325D"} fillRule="evenodd">
          <g fill={color || "#32325D"} fillRule="nonzero">
            <g>
              <g>
                <g>
                  <path
                    d="M12.667 4.273L11.727 3.333 8 7.06 4.273 3.333 3.333 4.273 7.06 8 3.333 11.727 4.273 12.667 8 8.94 11.727 12.667 12.667 11.727 8.94 8z"
                    transform="translate(-1274.000000, -1702.000000) translate(946.000000, 514.000000) translate(5.000000, 950.000000) translate(323.000000, 238.000000)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }