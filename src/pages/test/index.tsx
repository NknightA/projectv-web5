import { Input } from '../../conponents/Test';
import { LinkComponent} from "../../conponents/Links/Link";

export default function Index () {
    return (
        <>
            <Input />
            <LinkComponent linkhref="/" link="aaa"/>
            <div>
                <LinkComponent linkhref="/login" link="login"/>
            </div>
        </>
    )
}