import React, { useEffect, useRef } from "react";

interface IProps {
  show: boolean;
  onClose?: () => void;
  children: React.ReactElement;
}

const AppModal = ({ show, onClose, children }: IProps): JSX.Element => {
  const contentRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", outsideClickHandler, true);

    return () => {
      document.removeEventListener("click", outsideClickHandler, true);
    };
  });

  const outsideClickHandler = (event: MouseEvent) => {
    if (event && event.target) {
      if (
        contentRef &&
        contentRef.current &&
        !contentRef.current.contains(event.target)
      ) {
        console.log("close");
        if (typeof onClose !== "undefined") onClose();
      }
    }
  };

  return (
    <>
      {show && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
              &#8203;
            </span>

            <div
              ref={contentRef}
              className='border w-4/12 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-4xl'>
              <div className='bg-white p-4'>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppModal;
