import Image from 'next/image';
import { ReactNode } from 'react';
import Tooltip from '@mui/material/Tooltip';

const ResumeController = ({
  zoomIn,
  zoomOut,
  resetZoom,
}: {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}) => {
  return (
    <div className="flex">
      <div className="flex items-center gap-5">
        <TooltipRenderer title="Zoom out">
          <Image
            src="/icons/zoomout.png"
            className="cursor-pointer"
            alt="Zoom out"
            width="24"
            height="24"
            onClick={zoomOut}
          />
        </TooltipRenderer>
        <TooltipRenderer title="Zoom in">
          <Image
            src="/icons/zoomin.png"
            className="cursor-pointer"
            alt="Zoom in"
            width="24"
            height="24"
            onClick={zoomIn}
          />
        </TooltipRenderer>
        <TooltipRenderer title="Reset zoom">
          <Image
            src="/icons/reset.png"
            className="cursor-pointer"
            alt="Reset zoom"
            width="20"
            height="20"
            onClick={resetZoom}
          />
        </TooltipRenderer>
      </div>
    </div>
  );
};

export default ResumeController;

function TooltipRenderer({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Tooltip title={title}>
      <div className="w-auto h-auto flex">{children}</div>
    </Tooltip>
  );
}
