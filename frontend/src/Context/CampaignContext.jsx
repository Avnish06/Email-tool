import React, {
  createContext,
  useContext,
  useState,
} from "react";

const CampaignContext = createContext(null);

export const CampaignProvider = ({ children }) => {

  const [campaign, setCampaign] = useState({
    name: "",
    contacts: [],
    type: "",
    subject: "",
    content: "",
  });

  // Track completed steps
  const [steps, setSteps] = useState({
    name: false,
    contacts: false,
    type: false,
    write: false,
    editor: false,
    preview: false,
  });

  return (
    <CampaignContext.Provider
      value={{
        campaign,
        setCampaign,
        steps,
        setSteps,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaign = () => {
  return useContext(CampaignContext);
};
