import { Link, Box, Flex, Heading, Text, Image, Center, Grid, GridItem, Button, SimpleGrid, Input, Select, Spacer } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChevronLeft, faChevronRight, faCircleCheck, faEnvelope, faHandHoldingHeart, faHippo, faPhone, faSpa, faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import styles from "./home.module.css";


const Home = () => {
  console.log(styles)
  return (
    <>
    <Flex display={"grid"} gridTemplateColumns={"2fr 1fr"} gap={"20px"}>
        <Box p={"100px 20%"}>
          <Center>
            <Flex direction={"column"} gap={"25px"}>
              <Box>
                <Text color={"brandGreen"}>Perfect Solution For Your Health</Text>
                <hr color='#f28a5d'   style={{width:"50px", height:"2px", marginTop:"5px"}}/>
              </Box>
              <Heading color={"brandGreen"} fontSize={"3rem"} fontFamily={"Rodrigo Fuenzalida"}>We Will Help You To Understand & Solve The Problem</Heading>
              <Button bg={"brandOrange"} color={"white"} w={"200px"}>Make An Appointment</Button>
            </Flex>
          </Center>
        </Box>
        <Box p={"100px 50px"}>
          <Grid templateRows="repeat(5, 1fr)" templateColumns='repeat(5, 1fr)' gap={"10px"} height={"400px"} width={"400px"}>
            <GridItem colSpan={1} ><Image height={"100%"} width={"auto"} borderRadius={"50%"} src='\Resources\Square_doc1.jpg'/></GridItem>
            <GridItem colSpan={1} ></GridItem>
            <GridItem rowSpan={3} colSpan={3}  ><Image  objectFit='contain' borderRadius={"100px 0 0 0"} src='\Resources\square_doc2.jpg' alt='Doctor Supporting a Patient'/></GridItem>
            <GridItem colSpan={1}></GridItem>
            <GridItem colSpan={1} bgColor={"brandOrange"} borderRadius={"50% 0 0 0"}></GridItem>
            <GridItem rowSpan={2} colSpan={2} ><Image borderRadius={"0 0 0 80px"} src='\Resources\square_doc3.jpg'/></GridItem>
            <GridItem rowSpan={2} colSpan={2} ><Image borderRadius={"0 0 80px 0"} src='\Resources\square_doc5.jpg'/></GridItem>
            <GridItem colSpan={1} ><Image borderRadius={"50%"} src='\Resources\square_doc4.jpg'/></GridItem>
            <GridItem colSpan={2} ></GridItem>
          </Grid>
        </Box>
    </Flex>

    <Box p={"0 15%"}>
      <SimpleGrid columns={3} spacing={20}>
        <Flex bg={"brandGreen"} color={"white"} p={"20px 20px"} borderRadius={"10px"} gap={"20px"} justify={"space-between"} direction={"column"} alignItems={"center"}>
          <FontAwesomeIcon fontSize={"3rem"} icon={faHandHoldingHeart}/>
          <Heading as={"h3"} fontSize={"1.5rem"}>Dedicated Therapyist</Heading>
          <Text textAlign={"center"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quasi odit eveniet repellendus culpa dolor consectetur doloribus nihil placeat illum!</Text>
          <Button color={"white"} borderRadius={"3px"} variant={"outline"}>LEARN MORE</Button>
        </Flex>
        <Flex bg={"brandGreen"} color={"white"} p={"20px 20px"} borderRadius={"10px"} gap={"20px"} justify={"space-between"} direction={"column"} alignItems={"center"}>
          <FontAwesomeIcon fontSize={"3rem"} icon={faSpa}/>
          <Heading as={"h3"} fontSize={"1.5rem"}>Dedicated Therapyist</Heading>
          <Text textAlign={"center"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quasi odit eveniet repellendus culpa dolor consectetur doloribus nihil placeat illum!</Text>
          <Button color={"white"} borderRadius={"3px"} variant={"outline"}>LEARN MORE</Button>
        </Flex>
        <Flex bg={"brandGreen"} color={"white"} p={"20px 20px"} borderRadius={"10px"} gap={"20px"} justify={"space-between"} direction={"column"} alignItems={"center"}>
          <FontAwesomeIcon fontSize={"3rem"} icon={faPhone}/>
          <Heading as={"h3"} fontSize={"1.5rem"}>Dedicated Therapyist</Heading>
          <Text textAlign={"center"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quasi odit eveniet repellendus culpa dolor consectetur doloribus nihil placeat illum!</Text>
          <Button color={"white"} borderRadius={"3px"} variant={"outline"}>LEARN MORE</Button>
        </Flex>
      </SimpleGrid>
    </Box>

    <Box color={"brandGreen"} mt={"50px"} p={"50px 10%"}>
      <Flex justify={"space-between"}>
        <Box>
          <Heading color={"#f28a5d"}>88+</Heading>
          <Text>Country Coverage</Text>
        </Box>
        <Box>
          <Heading color={"#f28a5d"}>88+</Heading>
          <Text>Country Coverage</Text>
        </Box>
        <Box>
          <Heading color={"#f28a5d"}>88+</Heading>
          <Text>Country Coverage</Text>
        </Box>
        <Box>
          <Heading color={"#f28a5d"}>88+</Heading>
          <Text>Country Coverage</Text>
        </Box>
      </Flex>
    </Box>


    <Box>
      <Flex color={"brandGreen"} gap={"20px"} w={"80%"}>
        <Box w={"50%"}>
          <Image w={"100%"} src='\Resources\portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smiling-camera.jpg'/>
        </Box>
        <Box w={"50%"}>
          <Flex direction={"column"} gap={"30px"}>
            <Heading fontFamily={"Rodrigo Fuenzalida"}>We Know What We Are But Now What We May Be!</Heading>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi est quidem magni error veniam quasi, vero harum ex dicta sint eius doloremque sapiente nam dolor temporibus quaerat numquam voluptate repellendus distinctio vitae iure! In, molestiae!</Text>
            <SimpleGrid columns={2} gap={"20px"}>
              <Box><Flex gap={"10px"} alignItems={"center"}><FontAwesomeIcon color='#f28a5d' icon={faCircleCheck}/><Heading fontSize={"1rem"}>Psychodynamic Therapy</Heading></Flex></Box>
              <Box><Flex gap={"10px"} alignItems={"center"}><FontAwesomeIcon color='#f28a5d' icon={faCircleCheck}/><Heading fontSize={"1rem"}>Psychodynamic Therapy</Heading></Flex></Box>
              <Box><Flex gap={"10px"} alignItems={"center"}><FontAwesomeIcon color='#f28a5d' icon={faCircleCheck}/><Heading fontSize={"1rem"}>Psychodynamic Therapy</Heading></Flex></Box>
              <Box><Flex gap={"10px"} alignItems={"center"}><FontAwesomeIcon color='#f28a5d' icon={faCircleCheck}/><Heading fontSize={"1rem"}>Psychodynamic Therapy</Heading></Flex></Box>
            </SimpleGrid>
            <Button width={"50%"} bg={"brandGreen"} color={"white"}>Make An Appointment</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>

    <Box p={"100px 15%"}>
      <SimpleGrid columns={2} gap={"20px"}>
        <Box>
          <Heading>How Can We Help For Your Mental Disease?</Heading>
        </Box>
        <Box bg={"gray.100"}>
          <Flex gap={"10px"}>
            <Box w={"50%"}><Image src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/></Box>
            <Box w={"50%"} p={"30px 20px 30px 0"}><Flex direction={"column"}><Heading fontSize={"1rem"}>Dating & Relationship</Heading><Spacer/><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text><Spacer/><Link>Explore Now<FontAwesomeIcon icon={faArrowRight}/></Link></Flex></Box>
          </Flex>
        </Box>
        <Box bg={"gray.100"}>
          <Flex gap={"10px"}>
            <Box w={"50%"}><Image src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/></Box>
            <Box w={"50%"} p={"30px 20px 30px 0"}><Flex direction={"column"}><Heading fontSize={"1rem"}>Dating & Relationship</Heading><Spacer/><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text><Spacer/><Link>Explore Now<FontAwesomeIcon icon={faArrowRight}/></Link></Flex></Box>
          </Flex>
        </Box>
        <Box bg={"gray.100"}>
          <Flex gap={"10px"}>
            <Box w={"50%"}><Image src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/></Box>
            <Box w={"50%"} p={"30px 20px 30px 0"}><Flex direction={"column"}><Heading fontSize={"1rem"}>Dating & Relationship</Heading><Spacer/><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text><Spacer/><Link>Explore Now<FontAwesomeIcon icon={faArrowRight}/></Link></Flex></Box>
          </Flex>
        </Box>
        <Box bg={"gray.100"}>
          <Flex gap={"10px"}>
            <Box w={"50%"}><Image src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/></Box>
            <Box w={"50%"} p={"30px 20px 30px 0"}><Flex direction={"column"}><Heading fontSize={"1rem"}>Dating & Relationship</Heading><Spacer/><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text><Spacer/><Link>Explore Now<FontAwesomeIcon icon={faArrowRight}/></Link></Flex></Box>
          </Flex>
        </Box>
        <Box bg={"gray.100"}>
          <Flex gap={"10px"}>
            <Box w={"50%"}><Image src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/></Box>
            <Box w={"50%"} p={"30px 20px 30px 0"}><Flex direction={"column"}><Heading fontSize={"1rem"}>Dating & Relationship</Heading><Spacer/><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text><Spacer/><Link>Explore Now<FontAwesomeIcon icon={faArrowRight}/></Link></Flex></Box>
          </Flex>
        </Box>
        <Box bg={"gray.100"}>
          <Flex gap={"10px"}>
            <Box w={"50%"}><Image src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/></Box>
            <Box w={"50%"} p={"30px 20px 30px 0"}><Flex direction={"column"}><Heading fontSize={"1rem"}>Dating & Relationship</Heading><Spacer/><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text><Spacer/><Link>Explore Now<FontAwesomeIcon icon={faArrowRight}/></Link></Flex></Box>
          </Flex>
        </Box>
        <Box bg={"gray.100"}>
          <Flex gap={"10px"}>
            <Box w={"50%"}><Image src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/></Box>
            <Box w={"50%"} p={"30px 20px 30px 0"}><Flex direction={"column"}><Heading fontSize={"1rem"}>Dating & Relationship</Heading><Spacer/><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text><Spacer/><Link>Explore Now<FontAwesomeIcon icon={faArrowRight}/></Link></Flex></Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>


    <Box p={"150px 30% 150px 20%"} bg={"#cccccc"} backgroundImage={`url("\Resources\young-doctor-supporting-his-patient.jpg")`}>
      <Flex color={"white"} direction={"column"} gap={"20px"} p={"40px"} bg={"brandOrange"}>
        <Center>
          <Heading>Get Appointment</Heading>
        </Center>
        <Center>
          <Text>It's a long established fact that a reader will be readable content.</Text>
        </Center>
        <SimpleGrid color={"white"} columns={2} gap={"20px"}>
          <Input color={"white"} placeholder='Name' name='name' type='text'/>
          <Input placeholder='Email' name='email' type='text'/>
          <Select>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Select>
          <Select>
            <option>Specialist</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Select>
          <Input type='date'/>
          <Input placeholder='Phone Number' name='number' type='text'/>
        </SimpleGrid>
        <Button>Make An Appointment</Button>
      </Flex>
    </Box>

    <Box color={"brandGreen"} padding={"50px 15%"}>
      <Center><Heading>Our Professional Therapists</Heading></Center>
      <br/>
      <Flex gap={"20px"}>
        <Box>
          <Flex direction={"column"} gap={"15px"}>
            <Image w={"100%"} src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/>
            <Heading textAlign={"center"} fontSize={"1.5rem"}>Dr. Morrie Lewis</Heading>
            <Text color={"brandOrange"} textAlign={"center"}>Cardiologist</Text>
          </Flex>
        </Box>
        <Box>
          <Flex direction={"column"} gap={"15px"}>
            <Image w={"100%"} src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/>
            <Heading textAlign={"center"} fontSize={"1.5rem"}>Dr. Morrie Lewis</Heading>
            <Text color={"brandOrange"} textAlign={"center"}>Cardiologist</Text>
          </Flex>
        </Box>
        <Box>
          <Flex direction={"column"} gap={"15px"}>
            <Image w={"100%"} src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/>
            <Heading textAlign={"center"} fontSize={"1.5rem"}>Dr. Morrie Lewis</Heading>
            <Text color={"brandOrange"} textAlign={"center"}>Cardiologist</Text>
          </Flex>
        </Box>
        <Box>
          <Flex direction={"column"} gap={"15px"}>
            <Image w={"100%"} src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/>
            <Heading textAlign={"center"} fontSize={"1.5rem"}>Dr. Morrie Lewis</Heading>
            <Text color={"brandOrange"} textAlign={"center"}>Cardiologist</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>


    <Box mt={"50px"} color={"brandGreen"}>
      <Flex w={"90%"} m={"auto"} alignItems={"center"}>
        <Box w={"15%"}><Flex justify={"center"} alignItems={"center"}><FontAwesomeIcon fontSize={"2rem"} icon={faChevronLeft}/></Flex></Box>
        <Box w={"70%"}>
          <Flex>
            <Box w={"60%"}>
              <Flex direction={"column"} gap={"30px"}>
                <Box><Heading fontFamily={"abc"}>Happy Patient Says Something About Family Doctor</Heading></Box>
                <Box color={"brandOrange"}><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></Box>
                <Box><Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem aliquid perferendis ab quisquam dolorum quis, maiores nemo corrupti consequuntur.</Text></Box>
                <Box>
                  <Flex>
                    <Box w={"10%"}><Image w={"100%"} src='\Resources\square_doc4.jpg'/></Box>
                    <Box padding={"10px 20px"}>
                      <Heading fontSize={"1rem"}>Michle D. Smith</Heading>
                      <Text color={"brandOrange"}>Consultant</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box w={"40%"}><Image src='\Resources\Square_doc1.jpg'/></Box>
          </Flex>
        </Box>
        <Box w={"15%"}><Flex justify={"center"} alignItems={"center"}><FontAwesomeIcon fontSize={"2rem"} icon={faChevronRight}/></Flex></Box>
      </Flex>
    </Box>


    <Box mt={"100px"} bg={"brandGreen"} color={"white"} p={"70px 15%"}>
      <SimpleGrid columns={3}>
        <Box>
          <Flex direction={"column"}>
            <Heading>Family Doctor</Heading>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, assumenda.</Text>
            <Text>P: +88 666 888 0000</Text>
            <Text>E: needHelp@company.com</Text>
            <Text>A: Brooklyn street, New York 600</Text>
          </Flex>
        </Box>
        <Box>
          <Flex direction={"column"}>
            <Heading>Useful Links</Heading>
            <Link>Appointments</Link>
            <Link>Therapies</Link>
            <Link>Cases</Link>
            <Link>Contact Us</Link>
          </Flex>
        </Box>
        <Box>
          <Flex direction={"column"} gap={"25px"}>
            <Heading>Subscribe to Newsletter</Heading>
            <Input placeholder='Name' type='text'/>
            <Input placeholder='Email' type='text'/>
            <Button>Submitt Now</Button>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
    </>
  )
}

export default Home

{/* <Box w={"100%"} gridArea={"imageOne"}><Image src='\Resources\happy-doctor-holding-clipboard-with-patients.jpg'/></Box>
            <Box w={"100%"} gridArea={"noImg"}></Box>
            <Box w={"100%"} gridArea={"bigImage"}><Image borderRadius={"100px 0 0 0"} w={"300px"} src='Resources\young-doctor-supporting-his-patient.jpg' alt='Doctor Supporting a Patient'/></Box>
            <Box w={"100%"} gridArea={"vector"}><Image/></Box>
            <Box w={"100%"} gridArea={"imageThree"}><Image src='\Resources\smiling-young-female-doctor-wearing-medical-robe-stethoscope-standing-desk-with-medical-tools-putting-hands-waist-isolated-pink-wall.jpg'/></Box>
            <Box w={"100%"} gridArea={"imageFour"}><Image src='\Resources\portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smiling-camera.jpg'/></Box>
            <Box w={"100%"} gridArea={"imageFive"}><Image src='\Resources\portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smiling-camera.jpg'/></Box>
           */}