import { HeroBoxStyle, ImageSrcStyle, PrimaryAccentButton } from "../../assets/styles/Styles";
import HeroBodyTemplate from "./HeroBodyTemplate";

const HeroTemplateX = (props: any) => {
   // const [isButton, setButton] = useState(true);
   const { img,
      shortintro, cardTitle, description, bgimg, bodyBorder,
      isButton=true, buttonlabel, buttonlink, linktarget, buttonrighticon } = props;

	return (
		<>
			<HeroBoxStyle className="heroBoxContainer heroMolecule"
            // border={"1px solid cyan"}
            position="relative"
            // left="20rem"
            {...props}
            >
            {/*=------------------------=*/}
            {/* Background image */}
            <ImageSrcStyle src={img}/>
            {/* =------------------------= */}
            {!isButton ?
               // {/* Content Body with Button */}
               <HeroBodyTemplate className="heroBodyTemplate"
                  // intro={props}
                  backgroundImage={bgimg}
                  intro={shortintro}
                  title={cardTitle}
                  description={description}
                  {...props}
                  >
                  {/* //=------------------------=//
                  // label={buttonlabel}
                  // link={buttonlink}
                  // target={linktarget}
                  // icon={buttonrighticon}
                   // border={bodyBorder} */}
                  <PrimaryAccentButton
                     //=------------------------=//
                     // backgroundImage={bgimg}
                     // background={bodyBackground}
                     label    =  {buttonlabel}
                     link     =  {buttonlink}
                     target   =  {linktarget}
                     icon     =  {buttonrighticon}
                     {...props}
                  />
               </HeroBodyTemplate>
               :
               // {/* Content Body without Button */}
               // <HeroBodyTemplate className="heroBodyTemplate"
               <HeroBodyTemplate className="heroBodyTemplate"
                  // intro={props}
                  intro={shortintro}
                  title={cardTitle}
                  description={description}
                  {...props}
               />
            }
         {/*=------------------------=*/}

         </HeroBoxStyle>
		</>
	);
};

export default HeroTemplateX;
