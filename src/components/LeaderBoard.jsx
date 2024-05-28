import { ResponsiveLine } from "@nivo/line";
const LeaderBoard = () => {
  return (
    <>
      <div className=" flex justify-center mt-20 mb-10">
        <h1 className="text-5xl font-semibold underline">LeaderBoards</h1>
      </div>
      <div className="px-10">
        <h1 className="text-3xl font-bold">Basic Backtest</h1>
      </div>
      <div className="flex justify-center">
        <LineChart className="w-1/2 aspect-[4/3]" />
      </div>
      <div className="flex justify-end mr-10">
        <div className="grid w-64 grid-cols-2 justify-end content-center">
          <h2 className="text-3xl font-semibold mt-1">Slippage</h2>
          <select className="form-select p-2 bg-white border-2 rounded-lg mt-1">
            <option value="0">0%</option>
            <option value="0.1">0.5%</option>
            <option value="1">1%</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10">
        <div className="bg-red-100 border-2 border-red-400  rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">
                Selling with re entr
              </h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 1
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-start w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">3.96</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹381,845</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.65%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹319.54</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">strategy_name</h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 2
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">3.62</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹268,872.5</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.64%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹216.31</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">₹500</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              Buy
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">
                Based on premium and
              </h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 3
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">3.42</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹255,425</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.64%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹208.51</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">strategy_name</h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 4
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">3.22</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹370,845</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.65%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹303.47</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">strategy_name</h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 5
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">3.22</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹370,845</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.65%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹303.47</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">
                Based on premium wit
              </h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 6
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">3.01</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹135,980</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.49%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹185.77</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">strategy_name</h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 7
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">2.76</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹267,867.5</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.60%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹218.49</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">
                Wait and trade_Save
              </h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 8
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">2.62</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹178,252.5</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.63%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹161.9</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-4 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">iron condor</h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 9
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">2.44</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹176,420</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.65%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹137.51</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
        <div className="bg-red-100 border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-black">strategy_name</h3>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-black">
                Rank 10
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Calmar Ratio
                </h4>
                <div className="flex justify-normal w-24">
                  <div className="grid grid-cols-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C8.29875 7.87625 7.5975 7.7525 6.875 7.625 C3.0365349 8.12566936 1.9090173 9.875688 -0.47265625 12.78515625 C-0.97667969 13.18605469 -1.48070313 13.58695313 -2 14 C-4.97949534 13.63539636 -7.36922422 12.40934417 -10 11 C-10.7425 11.825 -11.485 12.65 -12.25 13.5 C-15 16 -15 16 -19 16 C-18.1543722 10.98186663 -15.00000528 7.94915643 -11 5 C-7.31906638 4.91634242 -6.09023249 5.93984501 -3 8 C-0.85432087 6.27144074 -0.85432087 6.27144074 1 4 C0.67 2.68 0.34 1.36 0 0 Z "
                        fill="#56A800"
                        transform="translate(21,8)"
                      />
                      <path
                        d="M0 0 C2.97 0 5.94 0 9 0 C9 2.64 9 5.28 9 8 C7.68 8 6.36 8 5 8 C5.33 6.35 5.66 4.7 6 3 C4.02 3 2.04 3 0 3 C0 2.01 0 1.02 0 0 Z "
                        fill="#57CB01"
                        transform="translate(21,8)"
                      />
                    </svg>
                    <p className="text-3xl font-bold text-black">2.04</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Overall Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹176,420</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Win Percentage
                </h4>
                <p className="text-3xl font-bold text-black">0.65%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">
                  Avg. Daily Profit
                </h4>
                <p className="text-3xl font-bold text-black">₹137.51</p>
                <h4 className="text-lg font-medium text-black mb-2 mt-4">
                  Price
                </h4>
                <p className="text-3xl font-bold text-black">-</p>
              </div>
            </div>
            <button
              type="button"
              className="px-5 mt-6 py-3 text-base font-medium text-center text-black bg-red-400 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export default LeaderBoard;
