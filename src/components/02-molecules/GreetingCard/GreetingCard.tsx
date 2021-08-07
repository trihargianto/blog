import React from "react"

import profilePic from "../../../img/profile-pic.jpeg"
import Image from "../../01-atoms/Image"
import * as styled from "./styled"

const GreetingCard = () => {
  return (
    <styled.Wrapper>
      <styled.LeftContent>
        <styled.TextHeading size="heading3" isBold>
          Halo, salam kenal! senang kamu datang ke sini{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </styled.TextHeading>
        <styled.TextBody size="body2" tag="p">
          Website ini adalah catatan digital saya, berisi tulisan dari apa yang
          saya pelajari dan apapun yang ingin saya tulis. Saya harap tulisan
          saya bisa bermanfaat.
        </styled.TextBody>
      </styled.LeftContent>

      <styled.RightContent>
        <Image
          src={profilePic}
          alt="Tri Hargianto"
          ratio="1:1"
          variant="rounded"
        />
      </styled.RightContent>
    </styled.Wrapper>
  )
}

export default GreetingCard
