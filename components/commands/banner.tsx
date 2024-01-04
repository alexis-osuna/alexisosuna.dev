import config from "../../config.json";

export const banner = (): JSX.Element => {
  return (
    <div>
      <pre className="hidden md:block">
        {`
        
  ____,__,  ____,_, _,__, ____,  ____, ____,_, _,_,  _, ____,
  (-/_|(-|  (-|_,(-\_/(-| (-(__  (-/  \(-(__(-|  (-|\ | (-/_| 
  _/  |,_|__,_|__,_/ \,_|_,____)  _\__/,____)_|__/_| \|,_/  |,
 (     (    (    (    (   (      (     (    (    (     (      
 
        `}
      </pre>
      <pre className="text-xs md:hidden">
        {`
        
  ____,__,  ____,_, _,__, ____, 
  (-/_|(-|  (-|_,(-\_/(-| (-(__  
  _/  |,_|__,_|__,_/ \,_|_,____) 
 (     (    (    (    (   (      
  ____, ____,_, _,_,  _, ____,   
 (-/  \(-(__(-|  (-|\ | (-/_|    
  _\__/,____)_|__/_| \|,_/  |,   
 (     (    (    (     (         
                
         `}
      </pre>
      <div>
        <p>{"Type 'help' to see the list of available commands."}</p>
        <p>{"Type 'about' to know more about me."}</p>
        <p>
          {"Type 'repo' or click "}
          <a
            className="text-blue-400 underline"
            href={config.repo}
            target="_blank"
          >
            here
          </a>{" "}
          for the Github repository.
        </p>
      </div>
    </div>
  );
};
