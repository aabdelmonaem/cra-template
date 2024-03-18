import { useConfigContext, useLangContext } from "@aabdelmonaem/core-lib";
import styles from './home.module.css';


const HomeView = () => {
    const {getConfig} = useConfigContext();
   
    return <div className={styles.homeRoot}>home page Version {getConfig('version')}</div>;
};

export default HomeView;