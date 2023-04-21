import Link from 'next/link';
import { useState } from 'react';
import NavLink from '../NavLink';

export function QuinchoCalendarDay(props) {
    //${eventstates[state]}
    const eventstates = {
        1: "flex-shrink-0 w-2 h-2 border border-gray-500 bg-gray-500 rounded-full",
        2: "flex-shrink-0 w-2 h-2 border border-yellow-500 bg-yellow-500 rounded-full",
        3: "flex-shrink-0 w-2 h-2 border border-green-500 bg-green-500 rounded-full",

    };

    // `who $options`
    return (
        <div>
            <div class="relative flex flex-col bg-white group">

                <div class="relative flex flex-col bg-white group">
                    <span class="mx-2 my-1 text-xs font-bold">
                        {props.dateCard}
                    </span>
                    {props.eventArray.length > 0 ? (
                        props.eventArray.map((detail) => {
                            return (
                                <>
                                {console.log(detail.state)}
                                    <div class="flex flex-col px-1 py-1 overflow-auto">
                                        <button
                                            class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200"
                                            onClick={() =>
                                                props.setShowModal(true)
                                            }
                                        >
                                            <span

                                                class={
                                                    eventstates[detail.state]
                                                }
                                            ></span>

                                            <span class="ml-2 font-light leading-none">
                                                {detail.beg_time}
                                            </span>
                                            <span class="ml-2 font-medium leading-none truncate">
                                                {detail.description}
                                            </span>
                                        </button>
                                    </div>
                                </>
                            );
                        })
                    ) : (
                        <></>
                    )}
                    <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                        <svg
                            class="w-5 h-5 w-6 h-6 plus"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                    <svg
                        class="w-5 h-5 w-6 h-6 plus"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
