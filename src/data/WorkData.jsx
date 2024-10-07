import { MdDesktopWindows, MdAndroid, MdBorderColor } from "react-icons/md";
import { FaRobot, FaPaintBrush, FaBullhorn } from "react-icons/fa";

const WorkData = {
    work_head_tag: "What I Do?",
    work_head_title: "How I can help your next project",
};

const WorkCardData = [
    {
        id: 1,
        work_icon: <MdDesktopWindows />,
        work_name: "Web Development",
        work_desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.",
    },
    {
        id: 2,
        work_icon: <MdAndroid />,
        work_name: "Android Development",
        work_desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.",
    },
    {
        id: 3,
        work_icon: <MdBorderColor />,
        work_name: "Content Writer",
        work_desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.",
    },
    {
        id: 4,
        work_icon: <FaRobot />,
        work_name: "Artificial Intelligence",
        work_desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.",
    },
    {
        id: 5,
        work_icon: <FaPaintBrush />,
        work_name: "Graphics Design",
        work_desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.",
    },
    {
        id: 6,
        work_icon: <FaBullhorn />,
        work_name: "Digital Marketing",
        work_desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.",
    },
];

export { WorkData, WorkCardData };
