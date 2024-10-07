import { MdDesktopWindows, MdAndroid, MdBorderColor } from "react-icons/md";
import { FaRobot, FaPaintBrush, FaBullhorn } from "react-icons/fa";

const WorkData = {
    work_head_tag: "Open Source",
    work_head_title: "Project where I volunteer",
};

const WorkCardData = [
    {
        id: 3,
        work_icon: <MdBorderColor />,
        work_name: "Content Writer",
        work_desc:
            "at Free Code Camp",
        work_link: "https:ututo.ar",
    },
    {
        id: 4,
        work_icon: <FaRobot />,
        work_name: "Chief Coordinator",
        work_desc:
            "at Ututo Linux",
    },
];

export { WorkData, WorkCardData };
