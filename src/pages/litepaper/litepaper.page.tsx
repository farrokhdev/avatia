import React, { ReactElement, useEffect } from "react";
import { Page } from "../../components/structure";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/litepaper-2.png";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { Footer } from "../../components/structure/footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  Items,
  TopSectionLitepaper,
  TopSectionMobileLitepaper,
} from "./litepaper.page.style";
import {
  ButtonFiveStyled,
  ButtonThreeStyled,
} from "../../components/syledComponents/Buttons.styled";

import LitepaperMobile from "../../assets/images/litepaper.png";

const TopSection = styled.section`
  position: relative;
  z-index: 1;
  max-width: 1660px;
  margin: 0 auto;

  > .slide {
    display: flex;
    width: 100%;
    margin: 0 auto 0 auto;
    border-radius: 50px;
    overflow: hidden;

    > .avatar {
      width: 866px;
      height: 800px;
    }

    > .text {
      margin-left: -200px;
      width: 1200px;
      max-height: 811px;
      background-position: center;
      background-size: cover;

      > h1 {
        font-size: 60px;
        font-weight: 700;
        line-height: 70px;
        letter-spacing: 0;
        text-align: left;
        color: ${({ theme }) => theme.white100};
        margin-left: 150px;
        margin-right: 150px;
        margin-top: 150px;
      }

      > p {
        margin-left: 150px;
        margin-right: 150px;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0;
        text-align: left;
        color: ${({ theme }) => theme.white100};
      }

      > .create {
        text-decoration: none;
        width: 250px;
        height: 65px;
        margin-left: 150px;
        margin-top: 80px;
        border-radius: 32.5px;
        display: flex;
        background: ${({ theme }) => theme.white100};
        justify-content: space-between;
        transition: ease-in all 100ms;

        &:hover {
          transition: ease-in all 100ms;
          width: 280px;
        }

        > p {
          font-family: "Poppins", sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 26px;
          letter-spacing: 0;
          text-align: center;
          flex: 1;
          color: ${({ theme }) => theme.blue90};
        }

        > .icon {
          width: 65px;
          height: 65px;
          border-radius: 100%;
          background: ${({ theme }) => theme.blue90};
          text-align: center;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
  }
`;

export function LitepaperPage(): ReactElement {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Page title="Avatia LitePaper">
      <TopSectionLitepaper>
        <div className={"slide"}>
          <img
            className={"avatar"}
            src={require("../../assets/images/litepaper.png")}
            alt="avatia"
          />
          <div
            className={"text"}
            // style={{ backgroundImage: `url(${TextBackGround})` }}
          >
            <h1>Ready to get started?</h1>
            <p>
              هIf you’re an investor looking to partner with us and help shape
              the future of healthcare, we’d love to hear from you. Please don’t
              hesitate to get in touch with our team.
            </p>

            <ButtonFiveStyled>
              <Link to={"create-avatar"}>
                <p>Get Started</p>
                <div className={"icon"}>
                  <ArrowRight />
                </div>
              </Link>
            </ButtonFiveStyled>
          </div>
        </div>
      </TopSectionLitepaper>

      <TopSectionMobileLitepaper>
        <div className="slide">
          <img src={LitepaperMobile} alt="" />
          <div className="text-content">
            <h1>Ready to get started?</h1>
            <p>
              هIf you’re an investor looking to partner with us and help shape
              the future of healthcare, we’d love to hear from you. Please don’t
              hesitate to get in touch with our team.
            </p>

            <ButtonFiveStyled>
              <Link to={"create-avatar"}>
                <p>Get Started</p>
                <div className={"icon"}>
                  <ArrowRight />
                </div>
              </Link>
            </ButtonFiveStyled>
          </div>
        </div>
      </TopSectionMobileLitepaper>
      <div className="mb-20 mt-10">
        <Items>
          <h1>Litepaper</h1>
          <div className="accordions-list ">
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowRight style={{ transform: "rotate(90deg)" }} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Introduction
              </AccordionSummary>
              <AccordionDetails>
                Digital health is a fast-growing industry transforming how we
                think about health and wellness. With the rise of technology and
                widespread availability of health data, new opportunities have
                been created for individuals to manage their health and
                well-being, and for healthcare organizations to provide more
                personalized care. Avatia,is a leader in the digital health
                revolution, offering an innovative personal digital twin
                solution.
                <br />
                <br />
                Digital health twins are virtual representations of an
                individual’s health, created by gathering data from multiple
                sources and using advanced algorithms to provide a comprehensive
                view of an individual’s health status and history. This data can
                include everything from medical records and test results to
                lifestyle information and personal preferences.
                <br />
                <br />
                The potential benefits of these digital twins are numerous and
                impactful. For individuals, Avatia offers a clear and concise
                view of their health, helps identify potential health risks, and
                empower them to make informed decisions about their health and
                well-being. Avatia can provide valuable insights into patient
                populations, cost reduction, improve patient outcomes, and
                provide more personalized care for healthcare organizations.
                <br />
                <br />
                This white paper explores the concept of digital health twins
                and the exciting potential of Avatia. We delve into Avatia
                technology, its unique approach to privacy and security, and its
                potential benefits for both individuals and healthcare
                organizations. Additionally, we will discuss ethical
                considerations and the market opportunity for personal digital
                twins, and highlighting why Avatia is well-positioned to succeed
                in this growing market. By the end of this white paper, you will
                have a thorough understanding of the digital health twin
                concept, and how Avatia is leading the way in this exciting new
                field.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowRight style={{ transform: "rotate(90deg)" }} />
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Mission
              </AccordionSummary>
              <AccordionDetails>
                Avatia’s mission is to empower individuals to manage their
                health and well-being, through personalized digital health
                twins. We gather data from various sources, including wearables,
                medical records, and other health-related data, to create a
                real-time simulation of an individual’s health status. Through
                this platform, Avatia aims to provide users with actionable
                insights, personalized treatment plans, and the ability to track
                disease progression, aging and overall well-being.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowRight style={{ transform: "rotate(90deg)" }} />
                }
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Vision
              </AccordionSummary>
              <AccordionDetails>
                Avatia’s vision is to revolutionize the healthcare industry by
                providing an innovative and personalized wellness approach. By
                applying advanced technologies such as AI, machine learning, and
                digital twins, Avatia aims to equip individuals with greater
                insight and control over their health and well-being. With a
                strong focus on individualized care, Avatia aims to create a
                more equitable healthcare system, ensuring access to
                high-quality personalized care for everyone, regardless of their
                background or location. Through cutting-edge technology and
                commitment to individual care, Avatia is poised to drive
                significant advancements in healthcare and improve the lives of
                individuals worldwide.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowRight style={{ transform: "rotate(90deg)" }} />
                }
                aria-controls="panel4-content"
                id="panel4-header"
              >
                Problem Solved By Avatia
              </AccordionSummary>
              <AccordionDetails>
                Lack of Personalization in Healthcare:
                <br />
                One-size-fits-all approaches to healthcare can be ineffective
                and may not address unique needs and preferences of individual
                patients. This often leads to ineffective treatments and poor
                health outcomes.
                <br />
                <br />
                Avatia addresses this issue through the concept of precision
                medicine, offering personalized healthcare solutions tailored to
                individual unique needs and preferences. The platform uses
                machine learning algorithms to analyze a patient’s health data,
                including lifestyle habits, medical history, and current health
                status, to create a customized treatment plan. This might
                include aspects such as nutrition, exercise, sleep, mental
                health, Environmental exposures, and other lifestyle choices
                based on real-time biomarkers measured over the long term.
                <br />
                <br />
                Avatia also benefits from Wearia’s gathered biosignals and
                stimulations to make its model and improve well-being. Wearia
                wearables are equipped with advanced bio-sensing capabilities,
                enabling for the collection of diverse biometric data like heart
                rate, respiration, skin conductance, bioelectrical impedance
                (bio-Z), electrolytes, hormones, and muscle activity, among
                other metrics.
                <br />
                <br />
                It benefits from advanced bio-sensing technologies such as
                electrocardiogram (ECG), photoplethysmogram (PPG), electrodermal
                activity (EDA), skin temperature, sweat biosensors,
                electromyography (EMG), and electroencephalography (EEG)و detect
                nervous system, hormonal and cardiovascular activity. These
                biosignals enable tailored stimulations based on the user’s
                current cognitive and physiological state, leading to more
                effective physical and cognitive augmentation and enhanced
                well-being. The simulations can be electrical, magnetic,
                photonic, or sonic. The integration of advanced bio-sensing and
                simulations provides Wearia wearables users with a distinctive
                and enhanced experience in both the metaverse and daily life.
                <br />
                <br />
                The platform also provides patients with educational resources
                and tools to support self-care and empower them to take control
                of their health. This can result in improved health outcomes and
                increased patient satisfaction.
                <br />
                <br />
                Inefficient and Fragmented Health Data Collection and sharing:
                <br />
                Health data collection is often fragmented, spread across
                multiple sources and systems. This poses challenges for
                healthcare providers to access a patient’s complete health
                history, leading to duplicative testing, misdiagnoses, and
                adverse drug interactions.
                <br />
                <br />
                Avatia addresses this issue by providing a unified platform for
                the real-time collecting, storing, and sharing of patient data.
                The platform is designed to be interoperable with various EHR
                systems, facilitating seamless data exchange and collaboration
                between healthcare providers. This ensures that all providers
                have access to a patient’s complete health history, enabling
                them to make informed treatment decisions.
                <br />
                <br />
                mainly occurring
                <br />
                <br />
                Lack of Patient Engagement and Empowerment:
                <br />
                Traditionally, healthcare has been a passive experience for
                patients, with most interactions taking place in a doctor’s
                office or hospital. This can result in low patient engagement,
                with individuals feeling disinterested or disconnected from
                their health and wellness.
                <br />
                <br />
                Avatia transforms this by empowering patients with access to
                their health data and allowing them to take an active role in
                their health and wellness. The platform provides real-time
                updates and insights on health metrics, enabling patients to
                track their progress and make informed decisions about their
                health.
                <br />
                <br />
                Furthermore, Avatia provides patients with personalized health
                and wellness recommendations, helping them achieve their health
                goals and improve their overall well-being. This can lead to
                increased patient engagement, improved health outcomes, and
                decreased healthcare costs.
                <br />
                <br />
                Inadequate Remote Monitoring for Chronic Diseases:
                <br />
                Chronic diseases, such as diabetes, heart disease, and
                respiratory diseases, require consistent monitoring and
                management to prevent complications and improve health outcomes.
                However, traditional in-person visits to the doctor’s office or
                hospital can be inconvenient and time-consuming for patients,
                leading to decreased adherence to treatment plans.
                <br />
                <br />
                Avatia provides remote monitoring capabilities, allowing
                patients with chronic diseases to track their health metrics and
                receive real-time insights and recommendations from their
                healthcare provider. This can improve patient adherence to
                treatment plans and reduce the frequency of in-person visits,
                making healthcare more accessible and convenient for patients.
                <br />
                <br />
                The platform also integrates with wearable devices, such as
                glucose monitors or ECG, to collect real-time health data,
                providing healthcare providers with a more comprehensive view of
                a patient’s health. This can help providers make informed
                treatment decisions and improve health outcomes for patients
                with chronic diseases.
                <br />
                <br />
                Inefficient Communication between Healthcare Providers:
                <br />
                Effective communication between healthcare providers is critical
                for ensuring the best possible care for patients. However,
                traditional methods of communication, such as faxes and phone
                calls, are often slow and unreliable, leading to delays in care
                and a lack of coordination between providers.
                <br />
                <br />
                Avatia in collaboration with Embodia doctor’s room, another
                Allostasis platform, can provide a secure and decentralized
                platform for healthcare providers to communicate and collaborate
                on patient care. These platforms allow multidisciplinary experts
                to communicate quickly and efficiently, reducing the risk of
                communication errors and improving the coordination of care.
                <br />
                <br />
                Inadequate Population Health Management:
                <br />
                Traditional healthcare systems often struggle to effectively
                manage the health of large populations due to the sheer volume
                of patients and the need for ongoing monitoring and care. This
                can result in a fragmented and inconsistent approach to
                population health management, leading to poor health outcomes
                and increased healthcare costs.
                <br />
                <br />
                Avatia provides a comprehensive solution for population health
                management. The platform integrates health data from a large
                population of patients to create a comprehensive view of their
                health. Using this information, healthcare providers can
                identify population-level trends and patterns in health, such as
                the prevalence of certain diseases or health conditions. This
                allows them to develop targeted and effective strategies for
                public health management, including disease prevention and
                health promotion initiatives.
                <br />
                <br />
                Designing Medical Devices:
                <br />
                Avatia opens up a whole new realm of possibilities for medical
                device companies to improve their products. By analyzing the
                data collected from digital twins, companies can understand
                usage patterns and gain valuable insights into how their devices
                are utilized. This can help them identify areas for improvement
                and make changes to the design or functionality of the device
                that could make it more effective for the patient. Additionally,
                the data analysis can help medical device companies in
                comprehending patients’ needs and develop new products tailored
                to their specific needs. Ultimately, this process contributes to
                creating more personalized medical devices that are much more
                effective at helping patients with their health issues.
                <br />
                <br />
                Integration with 3D Printing Technology:
                <br />
                3D printing technology has been rapidly advancing in recent
                years and has been used in a wide range of fields including
                healthcare. The ability to create objects layer by layer has
                allowed for new levels of customization and efficiency, as well
                as the creation of complex structures challenging to produce
                with traditional manufacturing methods.
                <br />
                <br />
                Avatia can potentially integrate with 3D printing technology in
                various ways. For instance, 3D printing could be used to create
                custom components for Avatia’s wearable devices, such as sensors
                or enclosures. This would allow for more personalized and
                comfortable wearables, as well as the ability to adapt the
                devices to specific user needs. Additionally, Avatia’s biosignal
                tracking capabilities could be used to inform the design and
                production of 3D-printed prosthetics, orthotics, organs, or
                other medical devices.
                <br />
                <br />
                Research Applications and virtual labs:
                <br />
                Avatia’s digital twin technology offers a unique and
                unparalleled view of the human body and its functions, enabling
                researchers to gain new insights into the underlying mechanisms
                of various health conditions. The platform collects and
                aggregates real-time data from a diverse sources, including
                wearable devices, electronic health records, and self-reported
                data. This data can be analyzed and used to develop more
                targeted and effective treatments for various diseases and
                conditions.
                <br />
                <br />
                In addition to the wealth of data provided by Avatia, also
                offers a virtual lab environment with the potential to transform
                medical research. This environment enables researchers to
                conduct experiments and trials in a controlled and reproducible
                manner, without the need for physical labs. The virtual lab
                environment replicates real-world conditions, allowing
                researchers to test the efficacy of new treatments in a secure
                and controlled setting.
                <br />
                <br />
                Enhancing Metaverse Experiences:
                <br />
                Currently, metaverse experiences often lack reliable and
                accurate data about individuals in virtual environments making
                it difficult to create truly immersive experiences. For example,
                virtual environments may not accurately reflect an individual’s
                physical characteristics, movements, or behavior, which can make
                virtual experiences feel unrealistic.
                <br />
                <br />
                Avatia can make metaverse experiences more immersive and
                realistic by providing users with a realistic 3D avatar,
                allowing them to track their body motions, expressions, and
                other biosignals. It can sync with Wearia and Embodia
                facilities.
                <br />
                <br />
                Embodia offers a variety of services that are ready to be used,
                such as self-meetings, group meetings, doctor’s rooms,
                psychotherapy rooms, group therapy rooms, and seminar rooms.
                Users can choose from a wide range of environments available in
                Centeria marketplace and Avatia avatars. Embodia also offers an
                embodied experience of virtual worlds through the use of VR or
                AR boxes designed to hold a user’s smartphone and providing full
                immersion without the need for expensive VR or AR headsets. On
                the other hand, Wearia as we mentioned earlier, has powerful
                multidimensional simulation and stimulation abilities. By
                tracking body motions, expressions, and other vital signs, users
                can enjoy more embodied experience in virtual environments.
                <br />
                <br />
                In conclusion, Avatia along with its partnerships with Wearia,
                Incarnia, and Embodia will make metaverse experiences more
                immersive and realistic. Combining the wide range of services
                offered by Embodia with the powerful simulation abilities of
                Wearia, Avatia is bringing the future of virtual experiences
                closer to reality.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowRight style={{ transform: "rotate(90deg)" }} />
                }
                aria-controls="panel5-content"
                id="panel5-header"
              >
                Avatia Modeling
              </AccordionSummary>
              <AccordionDetails>
                Avatia’s digital health twin is created through a combination of
                data gathering and computational modeling. The process involves
                collecting data from multiple sources, including webcams,
                wearable devices, electronic health records, imaging studies,
                lab results, and self-reported information. This data is then
                integrated and processed using artificial intelligence and
                machine learning algorithms to create a detailed representation
                of an individual’s health. The digital twin will be continuously
                updated as new data is collected, allowing for a dynamic and
                accurate representation of an individual’s anatomy and other
                vitals in detail over time. This enables Avatia to provide
                real-time insights and personalized recommendations for health
                and wellness. In the following we will discuss our parameters
                guiding the creation of our digital health twin.
                <br />
                <br />
                1- Wearable devices:
                <br />
                Wearable devices, such as Wearia’s wearables, smartwatches, and
                continuous glucose monitors, collect extensive data about a
                person’s health and daily activities. These devices are becoming
                increasingly sophisticated and can measure a wide range of
                physiological parameters, such as heart rate, respiration rate,
                SpO2, body temperature, bio-z and sleep quality. The data
                generated by wearables can be used to form a comprehensive and
                dynamic model of a person’s vital states. This information can
                then be used to inform and improve health and wellness
                decisions, track disease progression, and personalize medical
                treatments. By integrating wearable data into Avatia, we can
                build a more accurate and nuanced digital twin, providing an
                invaluable tool for individuals, healthcare providers, and
                researchers alike. In our modeling process with the help of
                Wearia, another Allostasis platform, we measure a variety of
                parameters that we will discuss here:
                <br />
                <br />
                1.1. Electrocardiogram:
                <br />
                Electrocardiogram (ECG) sensors are devices that measure the
                heart’s electrical activity and display it as a waveform on a
                screen. These sensors typically consist of electrodes that are
                placed on the skin to detect the electrical signals produced by
                the heart’s contractions. The ECG waveform provides information
                about the heart’s rhythm, including the rate and regularity of
                the beats, and can indicate the presence of any heart problems,
                such as arrhythmias or abnormalities in the heart’s electrical
                conduction system.
                <br />
                <br />
                In our modeling with Wearia’s assistance, we use ECG sensors to
                collect data on heart rate variability through wearables, which
                is a good indicator of the health of the autonomic nervous
                system, cardiovascular system, stress levels, and sleep quality.
                <br />
                <br />
                Skin sympathetic nerve activity (SKNA) is another feature that
                can be extracted from ECG data. SKNA refers to the electrical
                signals that are generated by the sympathetic nerves in response
                to changes in the body’s internal and external environment. This
                activity is closely related to the body’s fight-or-flight
                response and is responsible for regulating several physiological
                processes, including blood pressure, heart rate, and sweating.
                This information can be used to help diagnose certain
                conditions, such as anxiety and depression, and monitor the
                effectiveness of treatments.
                <br />
                <br />
                1.2. Electrogastrography:
                <br />
                Electrogastrography (EGG) sensors measure the electrical
                activity of the stomach muscles by detecting the electrical
                signals produced during the stomach muscles contraction and
                relaxation during digestion. EGG sensors are typically applied
                to the skin’s surface on the abdomen and can be incorporated
                into wearables. They can be used to diagnose and monitor
                conditions such as gastroparesis, a condition in which the
                stomach empties its contents too slowly and other
                gastrointestinal disorders. EGG sensors are also being studied
                for their potential use in monitoring and treating eating
                disorders.
                <br />
                <br />
                1.3. Blood pressure measurement:
                <br />
                Blood pressure sensors play a crucial role in monitoring an
                individual’s health and wellness. They provide information on
                the force of blood flow through the arteries, which is an
                indication of the heart’s ability to pump blood effectively. The
                Wearia platform uses bio-impedance, oxygen saturation, EDA and
                skin temperature measurements to extract blood pressure data via
                wearables. In bio-z measurement, It involves sending a small,
                harmless electrical current through the body and measuring the
                resistance to the flow of that current. By analyzing the
                resistance, we can determine the blood pressure, as it affects
                the body’s electrical resistance. This non-invasive method of
                measuring blood pressure is attractive for continuous
                monitoring.
                <br />
                <br />
                This information can then be used to track changes in blood
                pressure over time, offering crucial insights into an
                individual’s health, including the presence of hypertension,
                heart disease, and other conditions that affect the
                cardiovascular system.
                <br />
                <br />
                1.4. Respiration sensors:
                <br />
                The respiration rate is calculated by using an ECG and also Spo2
                sensors. The ECG sensor detects the heart electrical activity
                and from that data, the respiration rate can be estimated.
                <br />
                <br />
                Respiration modeling can provide valuable insights into an
                individual’s respiratory function, including breathing patterns,
                depth, and rate. This information can be used to monitor
                respiratory diseases such as apnea, asthma and chronic
                obstructive pulmonary disease (COPD) and track the effectiveness
                of treatments over time.
                <br />
                <br />
                1.5. Skin temperature measurement:
                <br />
                Skin temperature sensors, also known as thermistors, are small
                electronic devices that measure skin temperature.
                <br />
                <br />
                The data collected by Wearia skin temperature sensors can
                provide insight into various physiological processes, such as
                thermoregulation, sleep patterns, and stress. For example,
                fluctuations in skin temperature can indicate changes in the
                activity of the sympathetic nervous system. Elevated skin
                temperature can also be a sign of inflammation, infection, or
                stress, while decreased skin temperature can be an indicator of
                poor circulation or decreased metabolism.
                <br />
                <br />
                1.6. Skin conductance measurement:
                <br />
                Skin conductance, also known as electrodermal activity (EDA), is
                a measure of the skin’s electrical resistance. Wearia measures
                this parameter by applying a small electrical current to the
                skin via two electrodes attached to the fingers, wrist, or palm.
                <br />
                <br />
                The data reflects the activity of sweat glands, serving as a
                reliable indicator of emotional or physiological arousal. These
                results can be used to infer emotional states, stress levels,
                sleep quality, or other aspects of physiological activity.
                <br />
                <br />
                1.7. Bio-impedance sensors:
                <br />
                Bio-impedance measures the electrical resistance of biological
                tissues. It is a non-invasive method of measuring the body’s
                electrical properties that is used in Wearia to provide
                important information about body composition. This includes
                details on fat mass, lean mass, and hydration levels through
                wearables.
                <br />
                <br />
                This information can be valuable in monitoring weight changes,
                nutrition, and fluid balance. Bio-impedance measurements can
                also be used to assess changes in body fluid levels, offering
                insights into changes in blood volume and other fluid
                compartments. Additionally, by measuring the electrical
                properties of tissues, it is possible to detect changes in fluid
                distribution, such as swelling, that may indicate disease or
                injury.
                <br />
                <br />
                1.8. Electrolyte sensors:
                <br />
                Electrolyte sensors are devices that measure the ions level in
                the body, including sodium, potassium, calcium, and magnesium,
                among others. These sensors are typically non-invasive and can
                be worn on the skin or incorporated into wearable devices, like
                sweat biosensors.
                <br />
                <br />
                The measurement of electrolyte levels is important for
                monitoring hydration status and maintaining the balance of
                essential minerals in the body. This information can be used to
                diagnose and monitor various health conditions, such as
                dehydration, hyponatremia, and electrolyte imbalances related to
                kidney disease. In addition, electrolyte sensors can provide
                valuable insights into the body’s response to physical activity,
                stress, and other environmental factors, which can help optimize
                athletic performance and overall health.
                <br />
                <br />
                1.9. Hormones measurement:
                <br />
                Hormones play a critical role in regulating various bodily
                processes and maintaining overall health. Hormone sensors come
                in various forms, such as wearable devices, implanted devices,
                or non-invasive sensors that measure hormones through saliva,
                sweat, urine, or blood samples. They facilitate the measurement
                of hormone levels in the body, including cortisol, testosterone,
                and insulin.
                <br />
                <br />
                These sensors can provide insight into the endocrine system and
                help identify any imbalances or anomalies. This information can
                be used to inform treatment and management decisions for various
                health conditions, including diabetes, thyroid disorders,
                stress, and infertility.
                <br />
                <br />
                1.10. Electroencephalography:
                <br />
                EEG (Electroencephalography) sensors measure the electrical
                activity of the brain by placing electrodes on the scalp,
                capturing electrical signals produced by neurons.
                <br />
                <br />
                EEG enables the detection of patterns and rhythms associated
                with various mental states and conditions. These analyses can be
                used to monitor stress levels, attention, and sleep quality.
                <br />
                <br />
                1.11. Muscle activity sensors:
                <br />
                Muscle activity sensors measure and track the electrical
                activity produced by muscle contractions. In Wearia, this data
                is recorded through Electromyography (EMG) sensors, which detect
                and record the electrical signals generated by muscle fibers
                during contractions. These signals are then used to determine
                the strength, duration, and timing of muscle contractions,
                <br />
                <br />
                and can provide valuable insights into muscle performance and
                function. EMG sensors provide useful data on muscle activation
                levels, ANS activity, muscle fatigue, muscle synchronization,
                and muscle activation patterns.
                <br />
                <br />
                1.12. Full body motion, posture tracking, and facial
                expressions:
                <br />
                Full body motion and posture tracking are other important
                aspects of wearable technology that can be integrated into
                Avatia’s modeling. The Wearia platform employs advanced
                full-body IMU 9DOF (Inertial Measurement Unit 9 Degrees of
                Freedom) sensors for motion and posture tracking, and while
                other sensors monitor facial expressions.
                <br />
                <br />
                These modeling can be used to monitor and improve
                musculoskeletal health, detect signs of fatigue or strain, and
                provide real-time feedback for posture correction. Full body
                motion tracking can be used for physical rehabilitation and
                fitness training and aiding in progress monitoring and
                identifying areas for improvement.
                <br />
                <br />
                1.13. Anatomical modeling:
                <br />
                Anatomical modeling is the process of creating a 3D virtual
                representation of a person’s body or a specific body part. This
                can be achieved through techniques such as imaging data and
                webcam.
                <br />
                <br />
                The resulting 3D model can be used for a variety of
                applications, including medical simulations, surgical planning,
                and creating personalized medical devices such as prosthetics.
                Anatomical modeling has revolutionized the healthcare industry
                by allowing healthcare professionals to better understand the
                structure and function of the human body. It also facilitates
                the planning and practice of medical procedures in a safe and
                controlled environment.
                <br />
                <br />
                2. Electronic medical records:
                <br />
                Electronic Health Records (EHRs) are digital records of a
                patient’s health information, including their medical history,
                laboratory test results, imaging studies, and medication
                history. This data can be used to build a comprehensive picture
                of an individual’s health and form the basis for a digital
                health twin. By using advanced analytics and machine learning
                techniques, Avatia can identify patterns and trends in the data
                that would otherwise go unnoticed, providing deeper insights
                into an individual’s health and helping to inform the
                development of new treatments and preventative strategies.
                <br />
                <br />
                3. self-reported information:
                <br />
                Self-reported information refers to data that individuals
                provide about themselves through questionnaires, surveys, or
                other forms of assessment. This type of information can play a
                significant role in creating a digital health twin. The
                information can provide a more comprehensive view of a person’s
                health, lifestyle, and behavior. Examples of self-reported
                information include:
                <br />
                <br />
                1: Demographic information: Information about a person’s age,
                gender, race, occupation, education, and other demographic
                factors can be used to understand their health and lifestyle.
                <br />
                2: Health history: A person’s health history can provide
                information about their medical conditions, past surgeries,
                hospitalizations, and treatments they have received.
                <br />
                3: Lifestyle habits: Information about a person’s diet, physical
                activity levels, sleep patterns, stress levels, and substance
                use can provide a more complete picture of their health.
                <br />
                4: Mental health: Information about a person’s mood, emotions,
                and psychological well-being helps assess mental health’s impact
                and how it affects their overall health.
                <br />
                5: Social and environmental factors: Information about a
                person’s social support system, financial stability, and
                exposure to environmental factors such as pollution can also be
                used to understand their health and well-being.
                <br />
                <br />
                By combining self-reported information with other data sources,
                such as biological and physiological data from wearable devices,
                smart homes data and electronic health records, a more complete
                and accurate digital health twin can be created.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowRight style={{ transform: "rotate(90deg)" }} />
                }
                aria-controls="panel6-content"
                id="panel6-header"
              >
                Token Economics and Rewarding Policy
              </AccordionSummary>
              <AccordionDetails>
                In order to foster the growth and advancement of the Avatia
                platform and its vibrant community, the Allostasis DAO
                foundation has set aside a generous allocation of 500 million
                Allo tokens. These valuable tokens serve as a means to
                incentivize active user participation within the thriving Avatia
                ecosystem. By actively contributing to the platform’s
                development through the creation of innovative assets or
                environments, bringing new users into the network, sharing and
                donating data for research, or even by expanding the network
                through the addition of new nodes, users have the opportunity to
                earn and be rewarded with Allo tokens. This mutually beneficial
                system encourages engagement, collaboration, and ongoing
                contributions that will further enrich the Avatia experience for
                all participants.
                <br />
                <br />
                In addition to incentivizing contributions to the platform,
                Stasis and Allo tokens can be utilized to fund development or
                creative projects within Avatia through the use of decentralized
                finance (DeFi) protocols. It is noteworthy that Stasis is also
                Allostasis’s stable token that is mintable against cash fiat and
                can be used for financing startups and projects. This creates a
                positive feedback cycle of growth and development within the
                Avatia ecosystem, as users are incentivized to contribute,
                driving further growth and development. Consequently, more
                incentives are created for users to contribute, further
                enhancing the cycle.
                <br />
                <br />
                Allostasis has allocated Allo tokens to Avatia staked and
                released based on specific working package goals outlined in
                Avatia’s proposal. The tokens will be released upon achieving
                these goals, attracting new users, or receiving funds from
                decentralized finance (DeFi). The token economics of Avatia are
                allocated according to the table below.
                <br />
                <br />
                Future Development:
                <br />
                The teams and founders are committed to completing 4 working
                packages by the end of 2024. After that time, the development of
                the platform will continue based on the clarified rules. For
                this job, 3% of the total Avatia tokens have been allocated.
                <br />
                <br />
                Treasury:
                <br />
                Avatia corporation will control 3% of the total tokens of
                Avatia, and any transactions and policies related to it will be
                reported to the community.
                <br />
                <br />
                Team:
                <br />
                One of the four working packages has been completed before March
                2023, and the teams and founders continue to fulfill their
                commitments. As a result, 25% of the total Avatia tokens have
                been allocated to the teams and founders. These tokens will be
                staked and released for trading or remain in stake based on the
                rules defined in the table below, upon completion of the working
                packages.
                <br />
                <br />
                Marketing:
                <br />
                For marketing purposes, 4% of the total tokens of Avatia have
                been allocated, and will be spent by Avatia corporation. This
                portion will be utilized for rewarding first users and
                influencers, amongst other use cases, and will be reported
                clearly to the community.
                <br />
                <br />
                Private Sale:
                <br />
                As part of our token distribution strategy, a portion of the
                allocated tokens, amounting to 5%, will be made available to
                investors participating in the pre-seed, seed, stage A, stage B,
                and stage C funding rounds.
                <br />
                <br />
                Public Sale:
                <br />
                Avatia is conducting a Public Sale to secure the necessary funds
                for the continuous development and growth of the platform.
                Through a decentralized auction, a portion equivalent to 6% of
                the total allocated Allo tokens will be made available for
                purchase. The proceeds generated from this public sale will
                actively contribute to covering the costs associated with
                platform development. As part of Avatia’s unwavering commitment
                to transparency and accountability, the team will regularly
                provide the community with updates and reports regarding the
                details and outcomes of this sale.
                <br />
                <br />
                Rewards to Nodes:
                <br />
                Everyone who runs Allostasis nodes and provides services to
                Avatia will receive rewards based on release rules mentioned in
                table below from the 4% of the total tokens allocated for this
                purpose.
                <br />
                <br />
                Rewards to Users:
                <br />
                Users, developers, researchers, and creators have the
                opportunity to develop the ecosystem through their
                participation. The majority of the total tokens, 50%, have been
                allocated to these community members based on the release rules
                outlined in the table below. These rewards will be staked for
                one year to support long-term participation. It’s important to
                note that those who hold tokens in stake have the right to vote,
                and the platform’s income will be divided among them.
                <br />
                <br />
                Token Release Table Avatia will release allocated tokens based
                on the success of the platform in increasing users, ensuring
                sustainable growth of the token value.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ArrowRight style={{ transform: "rotate(90deg)" }} />
                }
                aria-controls="panel7-content"
                id="panel7-header"
              >
                Allostasis Notes
              </AccordionSummary>
              <AccordionDetails>
                The Allostasis community is a place for people committed to
                creating positive change. Here, we embrace the power of
                collective collaboration between users and their AI assistants
                within a groundbreaking ecosystem. Through active engagement and
                the sharing of data, we build a community-owned AI engine that
                is poised to tackle the most pressing challenges of our time.
                Allostasis harnesses the potential of human-AI collaboration,
                empowering individuals to contribute their unique perspectives
                and insights towards solutions that promote human wellbeing,
                enhance social health, and ensure the sustainability of our
                environment.
                <br />
                <br />
                Allostasis ecosystem nodes are essential components of the
                decentralized infrastructure. These nodes contribute to the
                network by providing valuable resources such as bandwidth,
                storage, and computation power. In return for their
                contributions, nodes are incentivized with Allo tokens, which
                are distributed through smart contracts deployed on the Ethereum
                network. The smart contracts manage rewards based on various
                factors, including the amount of bandwidth, storage, and
                computation provided by each node, as well as the number of
                users they bring into the network. This incentivization
                structure ensures that nodes are fairly and transparently
                rewarded for their contributions to the Allostasis ecosystem. By
                providing these incentives, Allostasis encourages participation
                and growth within the network, which in turn helps to enhance
                the overall functionality and effectiveness of all platforms in
                the Allostasis ecosystem.
                <br />
                <br />
                The nodes within the Allostasis ecosystem are equipped with the
                InterPlanetary File System (IPFS) protocol, which provides a
                decentralized and distributed file system. It’s essential to
                clarify that in Allostasis, the IPFS protocol is not primarily
                used for data storage. Instead, it is used to establish a
                network of decentralized nodes and record small amounts of data,
                such as authentication and verification data. This approach
                ensures secure and private data storage between nodes, allowing
                for easy and efficient sharing and collaboration among network
                participants. The nodes include a collaborative server, a big
                data platform for IoT devices, and an artificial intelligence
                (AI) engine for advanced processing.
                <br />
                <img
                  src="https://avatia.io/wp-content/uploads/2023/05/Allostasis-nodes-V1-1980x2613-1.png"
                  alt="Allostasis Diagram"
                />
              </AccordionDetails>
            </Accordion>
          </div>
        </Items>
      </div>
      <Footer />
    </Page>
  );
}
