"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
        toastClassName="!bg-[var(--bg-elev)] !text-[var(--text)] !border !border-[var(--accent)]/30"
        progressClassName="!bg-[var(--accent)]"
      />
    </>
  );
}
