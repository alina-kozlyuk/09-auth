"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { logout } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";

import css from "./AuthNavigation.module.css";

export default function AuthNavigation() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    try {
      await logout();

      clearIsAuthenticated();

      router.push("/sign-in");
    } catch (error) {
      console.error(error);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <li>
          <Link href="/sign-in">Login</Link>
        </li>

        <li>
          <Link href="/sign-up">Sign up</Link>
        </li>
      </>
    );
  }

  return (
    <>
      <li>
        <Link href="/profile">Profile</Link>
      </li>

      <li>
        <span>{user?.email}</span>
      </li>

      <li>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  );
}