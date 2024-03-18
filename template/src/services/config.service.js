import { authHeader } from "@aabdelmonaem/core-lib";
import instance from "../core/axios";

const API_URL = process.env.REACT_APP_API_KEY + "/config/";

const getAllConfig = () => {
    return instance.get(
        API_URL,
        { headers: authHeader() }
    );
};


const ConfigService = {
    getAllConfig,
};

export default ConfigService;
