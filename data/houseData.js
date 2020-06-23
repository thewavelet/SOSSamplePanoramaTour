export default house = {
  CONFERENCE_ROOM: {
    roomName: 'CONFERENCE_ROOM',
    info: `
      * CONFERENCE ROOM
      * Having a free discussion`,
    img: 'CONFERENCE_ROOM.jpg',
    adjacentRooms: ['RESEARCH_ROOM', 'TOOL_ROOM'],
  },
  RESEARCH_ROOM: {
    roomName: 'RESEARCH_ROOM' ,
    info: `
      * RESEARCH ROOM for CIVIL PROBLEM
      * Using Bigdata, AI`,
    img: 'RESEARCH_ROOM.jpg',
    adjacentRooms: ['CONFERENCE_ROOM']
  },
  TOOL_ROOM: {
    roomName: 'TOOL_ROOM',
    info:`
      * TOOL ROOM for CIVIL PROBLEM
      * Reverse engineering
      * 3D Scan
      * 3D Print`,
    img: 'TOOL_ROOM.jpg',
    adjacentRooms: ['CONFERENCE_ROOM']
  },
}
