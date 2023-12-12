import Facebook from "./Facebook.tsx";
import Instagram from "./Instagram.tsx";
import Twitter from "./Twitter.tsx";
import YouTube from "./YouTube.tsx";

type Props = {
    icon: "facebook" | "instagram" | "twitter" | "youtube"
}
function Icon({icon}: Props) {
    switch (icon) {
        case "facebook":
            return <Facebook />;
        case "instagram":
            return <Instagram />;
        case "twitter":
            return <Twitter />;
        case "youtube":
            return <YouTube />
        default:
            return ""
    }
}

export default Icon;
