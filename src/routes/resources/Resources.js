import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Resources.css";
import Section from "../../components/Section";
import Page from "../../components/Page";

class Resources extends React.Component {
  render() {
    const trupanionInfo =
      "When your pet gets ill or injured, we want you to be able to focus on the health and well-being of your pet. Medical insurance can help you deal with unexpected veterinary expenses and provide your pet with the best medical care. Trupanion can cover a significant portion of your veterinary bill (up to 90% of eligible costs*) in minutes. With a Trupanion policy, our clients often pay only their part of the bill at checkout and leave the hospital without waiting for claim approvals and reimbursements. You can learn more about Trupanion coverage and direct payments at";
    const trupanionDisclaimer =
      "*Terms and conditions apply. Please see the policy for complete details at Trupanion.com/pet-insurance. **Trupanion will process the claim according to the terms of the policy. Actual claim payment may be different from the estimate you provided to your client. Trupanion is a registered trademark owned by Trupanion, Inc. Underwritten in Canada by Omega General Insurance Company and in the United States by American Pet Insurance Company, 6100-4th Ave S, Seattle, WA 98108. Please visit AmericanPetInsurance.com to review all available pet health insurance products.";

    let adoptInfo = [
      {
        name: "Cat Tails Rescue Inc.",
        address: "",
        tel: "(204) 338-9725",
        website: "http://www.cattailsrescue.com/main/index.htm",
      },
      {
        name: "D'Arcy's Animal Rescue Center",
        address: "730B Century Street Winnipeg, MB R3H 0M1",
        tel: "(204) 888-2266",
        website: "http://www.darcysarc.ca/",
      },
      {
        name: "Free and Alive Rescue",
        address: "faar1449@gmail.com",
        tel: "",
        website: "http://www.freeandaliverescue.ca/",
      },
      {
        name: "Funds For Furry Friends",
        address: "#208 - 740 Rosser Avenue Brandon, MB R7A 0K9",
        tel: "(204) 573-8333",
        website: "http://www.fundsfurfriends.com/",
      },
      {
        name: "Hull's Haven Border Collie Rescue",
        address: "adoptions@hullshaven.org",
        tel: "",
        website: "http://www.hullshaven.org/",
      },
      {
        name: "Jenn’s Furry Friends Rescue Care of St Norbert Animal Hospital",
        address: "3311 Pembina Hwy Winnipeg, MB R3V 1T7",
        tel: "(204) 261-7376",
        website: "http://jennsfurryfriendsrescue.org/",
      },
      {
        name: "Manitoba Mutts Dog Rescue",
        address: "7 Killarney Ave Winnipeg, MB R3T 5T5",
        tel: "",
        website: "http://manitobamutts.org/",
      },
      {
        name: "Manitoba Underdogs Rescue",
        address: "Foster Home Based Rescue",
        tel: "",
        website: "http://www.manitobaunderdogs.org/",
      },
      {
        name: "Mantioba All Shepherd Rescue Inc.",
        address: "Foster Home Based Rescue",
        tel: "",
        website: "https://www.manitobaallshepherdrescue.com/ ",
      },
      {
        name: "Penny's All-Breed Animal Rescue",
        address: "",
        tel: "(204) 509-5432",
        website: "https://www.pennysallbreedanimalrescue.ca/ ",
      },
      {
        name: "Spirit of Hope Rescue",
        address: "Foster Home Based Rescue",
        tel: "",
        website: "http://www.spiritofhoperescue.ca/",
      },
      {
        name: "Winnipeg Animal Services Agency",
        address: "1057 Logan Avenue Winnipeg, MB R3E 3N8",
        tel: "",
        website: "http://www.winnipeg.ca/cms/animal/",
      },
      {
        name: "Winnipeg Humane Society",
        address: "45 Hurst Way Winnipeg, MB R3T 0R3",
        tel: "(204) 982-2021",
        website: "https://www.winnipeghumanesociety.ca/",
      },
      {
        name: "Winnipeg Pet Rescue Shelter",
        address: "3062 Portage Avenue Winnipeg, MB R3K 0Y1",
        tel: "(204) 832-7387",
        website: "http://petrescueshelter.com/",
      },
    ];

    adoptInfo = adoptInfo.map((adoptInfoItem) => {
      let { key, name, address, tel, website } = adoptInfoItem;
      return (
        <a className={s.adoptItem} href={website} key={name}>
          <div className={s.adoptInfoTitle}>{name}</div>
          <div>{address}</div>
          <div>{tel}</div>
        </a>
      );
    });

    return (
      <div className={s.root}>
        <Section title="Pet Insurance">
          <div className={s.trupanionContainer}>
            <div className={s.trupanionTitleWrapper}>
              <div className={s.trupanionTitle}>Trupanion</div>
              <a
                href="http://trupanion.com/canada/vet-direct-pay"
                rel="nofollow"
              >
                <img
                  src="http://trupanion.com/-/media/images/trupanion/logos/trupanion-logo-ca.png"
                  alt="Trupanion medical insurance for your pet"
                  style={({ border: 0 }, { width: 1000 }, { height: 44 })}
                />
              </a>
            </div>
            <div className={s.trupanionText}>
              {trupanionInfo}
              <a href="https://trupanion.com/" style={{ color: "black" }}>
                {" "}
                Trupanion.com
              </a>
              .
            </div>
            <div className={s.trupanionTextSm}>{trupanionDisclaimer}</div>
          </div>
        </Section>

        <Section title="Animal Shelters & Rescues">
          <div className={s.adoptContainer}>{adoptInfo}</div>
        </Section>
      </div>
    );
  }
}
export default withStyles(s)(Resources);
