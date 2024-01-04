import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Register your address", href: "/add-crime-scene" },
  { name: "Crime Codes", href: "/crimes" },
  { name: "Contact Us", href: "/contact" },
];

const AdminNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const notLoggedIn = () => {
    return localStorage.getItem("authenticated") !== "true";
  };

  const isAdmin = () => {
    return localStorage.getItem("authenticated") === "true";
  };

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-4">
      <nav className="flex items-center justify-between lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <a
            href="/"
            className="flex items-center text-2xl font-extrabold text-white"
          >
            CrimeWatch {/* Replace 'CrimeWatch' with your actual logo */}
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 text-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-6 text-lg">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold hover:text-yellow-300 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end text-lg">
          {notLoggedIn() ? (
            <>
              <a
                href="/login"
                className="font-semibold hover:text-yellow-300 transition duration-300 mr-4"
              >
                Sign In
              </a>
            </>
          ) : (
            <>
              {isAdmin() && (
                <button
                  onClick={handleLogout}
                  className="font-semibold hover:text-yellow-300 transition duration-300"
                >
                  Logout
                </button>
              )}
            </>
          )}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-yellow-500 bg-opacity-80" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-72 sm:max-w-sm bg-white">
          <div className="flex items-center justify-between p-4">
            <a
              href="/"
              className="flex items-center text-2xl font-extrabold text-black"
            >
              CrimeWatch {/* Replace 'CrimeWatch' with your actual logo */}
            </a>
            <button
              type="button"
              className="text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
          <div className="mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 pl-4 text-lg font-semibold hover:bg-yellow-100 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-4">
            {notLoggedIn() ? (
              <>
                <a
                  href="/login"
                  className="block py-2 pl-4 text-lg font-semibold hover:bg-yellow-100 transition duration-300"
                >
                  Sign In
                </a>
              </>
            ) : (
              <>
                {isAdmin() && (
                  <button
                    onClick={handleLogout}
                    className="block py-2 pl-4 text-lg font-semibold hover:bg-yellow-100 transition duration-300"
                  >
                    Logout
                  </button>
                )}
              </>
            )}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default AdminNavbar;
