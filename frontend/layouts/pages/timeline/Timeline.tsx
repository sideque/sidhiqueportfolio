"use client";

import { useEffect, useState } from "react";
import { FaBaby, FaCakeCandles, FaChurch, FaGift, FaGamepad, FaCode, FaMoon } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { EventType, TimelineType } from "@shared/types";
import { fetchData } from "@backend/hooks/fetchData";
import { sortDateByDescendingOrder } from "@frontend/ts/utils/sortDate";
import Section from "@frontend/layouts/common/Section";
import EventWrapper from "@frontend/components/EventWrapper";

const renderTimeline = (timelines: TimelineType[]) => {
  if (!timelines) return null;

  return timelines
    .sort(sortDateByDescendingOrder)
    .map(({ date, message, note, _id, type }: EventType) => {
      let typeIcon;

      switch (type) {
        case "present":
        case "gift":
          typeIcon = <FaGift />;
          break;
        case "born":
          typeIcon = <FaBaby />;
          break;
        case "birthday":
          typeIcon = <FaCakeCandles />;
          break;
        case "game":
          typeIcon = <FaGamepad />;
          break;
        case "programming":
          typeIcon = <FaCode />;
          break;
        case "school":
          typeIcon = <IoSchool />;
          break;
        case "religion":
          typeIcon = <FaChurch />;
          break;
        default:
          typeIcon = <FaMoon />;
      }

      return (
        <EventWrapper
          key={_id}
          _id={_id}
          typeIcon={typeIcon}
          date={date}
          note={note}
          message={message}
        />
      );
    });
};

export default function Timeline() {
  const [timelines, setTimelines] = useState<TimelineType[]>([]);

  useEffect(() => {
    const loadTimelines = async () => {
      const data = await fetchData("/api/timelines");
      setTimelines(data.timelines);
    };
    loadTimelines();
  }, []);

  return (
    <Section className="lg:w-max mx-auto">
      {renderTimeline(timelines)}
    </Section>
  );
}
