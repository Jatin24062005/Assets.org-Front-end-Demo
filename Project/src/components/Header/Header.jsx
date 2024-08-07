import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <div className="h-14 shadow-lg flex justify-between items-center px-4 rounded-b-md">
      <img
        src="https://asset-technology.com/wp-content/uploads/2021/05/Logo-colored.png"
        alt="Logo"
        className="h-full bg-contain"
      />
      <div className="flex-1 absolute z-50 ml-80">
        <NavigationMenu className="w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products & Solutions</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[700px] text-white text-opacity-100 backdrop-blur-md  bg-white bg-transparent shadow-lg">
                <div className="p-4">
                  <div className="grid grid-cols-3 text-sm gap-6">
                    <div>
                      <h3 className="font-bold mb-2 text-white">Correspondence Management</h3>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">ARROW CMS</NavigationMenuLink>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2  text-white">Insurance Solutions</h3>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">NILE360</NavigationMenuLink>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Content Management</h3>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Jupiter ECM Solution</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Jupiter Cloud</NavigationMenuLink>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Telecom Solutions</h3>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Focus™</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">ASSET mPay</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Extra Balance</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Mobile Air Transfer©</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Reach</NavigationMenuLink>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Smart Solutions</h3>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">NAMAA – Crop Farming Smart Solution</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">GetSpace</NavigationMenuLink>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Business Applications</h3>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">eClaim</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Qiyas</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Meeting Management System (MMS)</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">Campaignster</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-gray-200" href="#">A3maly – ERP Solution</NavigationMenuLink>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[700px] backdrop-blur-md bg-white bg-transparent shadow-lg">
                <div className="p-4">
                  <div className="grid grid-cols-2 text-sm gap-6">
                    <div>
                      <ul className="space-y-2">
                        <li className="font-bold text-white text-xs">Portals & Intranets</li>
                        <li className="font-bold text-white text-xs">Custom Software Development</li>
                        <li className="font-bold text-white text-xs">Mobile App Development</li>
                        <li className="font-bold text-white text-xs">Outsourcing Services</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li className="font-bold text-white">Microservices</li>
                        <li className="font-bold text-white">e-Commerce Platforms</li>
                        <li className="font-bold text-white">Offshore Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[700px] backdrop-blur-md bg-white bg-transparent shadow-lg">
                {/* Content for Industries goes here */}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[700px] backdrop-blur-md bg-white bg-transparent shadow-lg">
                <div className="p-4">
                  <div className="grid grid-cols-2 text-sm gap-6">
                    {/* Content for Company goes here */}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport className="w-full md:w-auto" />
        </NavigationMenu>
      </div>

      {/* Input */}
      <div>
        <form className="flex items-center max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 ring-1 focus:border-blue-500 block w-full pl-10 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search branch name..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white rounded-xl bg-customGreen border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
}
