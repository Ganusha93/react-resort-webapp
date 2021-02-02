import React from "react";
import { withRoomConsumer } from "../../contexts/RoomContext";
import Loading from "../Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomContainer);
