import { QuinchoCalendarForm } from '../QuinchoCalendarForm';
import { QuinchoCardDetail } from '../QuinchoCardDetail';

export function QuinchoCalendarDay(props) {
  console.log();
  const eventstates = {
    1: 'flex-shrink-0 w-2 h-2 border border-gray-500 bg-gray-500 rounded-full',
    2: 'flex-shrink-0 w-2 h-2 border border-yellow-500 bg-yellow-500 rounded-full',
    3: 'flex-shrink-0 w-2 h-2 border border-green-500 bg-green-500 rounded-full',
  };
  return (
    <div>
      <div class="relative flex flex-col bg-white group">
        <div class="relative flex flex-col bg-white group">
          {parseInt(props.dateCard.slice(5, 7)) === props.month &&
          parseInt(props.dateCard.slice(0, 4)) === props.year ? (
            <>
              <span class="mx-2 my-1 text-xs font-bold">{props.dateCard}</span>
              {props.eventArray.length > 0
                ? props.eventArray.map((detail, index) => {
                    return (
                      <div key={index}>
                        <div class="flex flex-col px-1 py-1 overflow-auto">
                          <button
                            class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200"
                            onClick={() => props.setShowCard(detail._id)}
                          >
                            <span class={eventstates[detail.state]}></span>
                            <span class="ml-2 font-light leading-none">
                              {detail.beg_time}
                            </span>
                            <span class="ml-2 font-medium leading-none truncate">
                              {detail.description}
                            </span>
                          </button>
                        </div>
                        {props.showCard && !props.itsAdmin ? (
                          <QuinchoCardDetail
                            setShowCard={props.setShowCard}
                            detail={detail}
                            showCard={props.showCard}
                          />
                        ) : props.showCard && props.itsAdmin ? (
                          <QuinchoCalendarForm
                            setShowCard={props.setShowCard}
                            itsAdmin={props.itsAdmin}
                            eventArray={props.eventArray}
                            showCard={props.showCard}
                          />
                        ) : null}
                      </div>
                    );
                  })
                : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
