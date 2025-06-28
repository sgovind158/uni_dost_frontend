import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="relative w-full">
      <div className="w-full bg-gray-200 rounded-[90px] h-1">
        <div
          className=" h-1 rounded-full transition-all"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, #3EF0C2 0%, #8051E1 36.18%, #E04970 68.51%, #E15535 100.35%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
