export function MatchesInfo(props) {
  return (
    <div className="flex flex-row items-center justify-center gap-4 mt-3">
      <div>
        <div className="mt-1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
            <div className="p-2 sm:p-10 text-center">
              <div
                style={{ height: '350px' }}
                className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg hover:bg-white bg-white dark:bg-[#2C2C2C]"
              >
                <div className="space-y-10">
                  <div className="px-6 py-4">
                    <div className="px-10 max-w-2xl">
                      <img
                        className="w-20 h-20 m-auto"
                        src="https://1.bp.blogspot.com/-I2CXXftUfwg/Xmk8N-NQ9BI/AAAAAAABX-8/TEL_4B7_aLQpuiRQPm1rrD4OHfmAahlbACLcBGAsYHQ/s1600/Liverpool%2BFC256x.png"
                        alt="Liverpool"
                      />
                    </div>
                    <div className="space-y-10">
                      <div className="font-bold text-xl mb-2 mt-5">
                        {props.data[0].home_team}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-10 text-center">
              <div style={{ height: '350px' }} className={props.classname}>
                <div className="space-y-10">
                  <div className="px-6 py-4">
                    <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">
                        Próximo Encuentro
                      </div>

                      <p id="data" className="text-base">
                        {props.data[0].date}
                      </p>
                      <div className="font-bold text-xl mb-2">
                        {props.data[0].time}
                      </div>

                      <p id="stadium" className="text-base">
                        {props.data[0].discipline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-10 text-center">
              <div
                style={{ height: '350px' }}
                className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg hover:bg-white bg-white dark:bg-[#2C2C2C] "
              >
                <div className="space-y-10">
                  <div className="px-6 py-4">
                    <div className="px-10 max-w-2xl">
                      <img
                        className="w-20 h-20 m-auto"
                        src="https://i.pinimg.com/originals/1a/02/f3/1a02f3ad7f2491c89e89aad80b562d89.jpg"
                        alt="Chelsea"
                      />
                    </div>
                    <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">
                        {props.data[0].away_team}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


