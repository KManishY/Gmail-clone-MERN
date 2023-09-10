import { Photo, StarBorderOutlined, SendOutlined, InsertDriveFileOutlined, DeleteOutlineOutlined, MailOutline, MailOutlined } from "@mui/icons-material";
const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: Photo
  },
  {
    name: "stared",
    title: "Stared",
    icon: StarBorderOutlined
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlined
  },
  {
    name: "draft",
    title: "Draft", 
    icon: InsertDriveFileOutlined
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutlineOutlined
  },
  {
    name: "allmail",
    title: "All Mail",
    icon: MailOutlined
  }
];

export default SIDEBAR_DATA;
