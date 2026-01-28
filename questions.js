const questions = [
  {
    "id": 1,
    "question": "Acompanyisplanningtorunaglobal marketingapplicationintheAWSCloud. Theapplicationwill featurevideosthat canbeviewedbyusers. Thecompanymust ensurethat all userscanviewthesevideoswithlowlatency. WhichAWSserviceshouldthecompanyusetomeet thisrequirement?",
    "options": [
      "A. AWSAutoScaling",
      "B. AmazonKinesisVideoStreams",
      "C. ElasticLoadBalancing",
      "D. AmazonCloudFront"
    ],
    "answer": "D",
    "raw_answer": "AmazonCloudFront isaglobal content deliverynetwork(CDN) that cachescontent at edgelocationsworldwide. Thisensureslowlatencyfor users, makingit ideal for deliveringvideocontent toaglobal audiencewithminimal delay."
  },
  {
    "id": 2,
    "question": "Whichpillar of theAWSWell-ArchitectedFrameworkreferstotheabilityofasystemtorecover frominfrastructureor servicedisruptionsanddynamicallyacquirecomputingresourcestomeet demand?",
    "options": [
      "A. Security",
      "B. Reliability",
      "C. Performanceefficiency",
      "D. Cost optimization"
    ],
    "answer": "B",
    "raw_answer": "TheReliabilitypillar focusesonasystem'sabilitytorecover fromfailuresandscaleresourcesdynamicallytomeet demand. Thisincludesstrategiesfor redundancy, fault tolerance, anddisaster recovery."
  },
  {
    "id": 3,
    "question": "Whichof thefollowingarebenefitsof migratingtotheAWSCloud?(Choosetwo.)",
    "options": [
      "A. Operational resilience",
      "B. Discountsfor productsonAmazon.com",
      "C. Businessagility",
      "D. Businessexcellence",
      "E. Increasedstaff retention"
    ],
    "answer": "A, C",
    "raw_answer": "AWSoffersoperational resiliencethroughfeatureslikehighavailability, fault tolerance, anddisaster recovery. Businessagilityisachievedbyenablingfaster innovation, scalability, andtheabilitytoquicklyadapt tomarket changes."
  },
  {
    "id": 4,
    "question": "Acompanyisplanningtoreplaceitsphysical on-premisescomputeserverswithAWSserverlesscomputeservices. Thecompanywantstobeabletotakeadvantageof advancedtechnologiesquicklyafter themigration. Whichpillar of theAWSWell-ArchitectedFrameworkdoesthisplanrepresent?",
    "options": [
      "A. Security",
      "B. Performanceefficiency",
      "C. Operational excellence",
      "D. Reliability"
    ],
    "answer": "B",
    "raw_answer": "Performanceefficiencyfocusesonusingadvancedtechnologiestooptimizeresourceutilizationandsystemperformance. Bymigratingtoserverlesscompute, thecompanycanquicklyadoptnewtechnologiesandimproveefficiency."
  },
  {
    "id": 5,
    "question": "Alargecompanyhasmultipledepartments. Eachdepartment hasitsownAWSaccount. Eachdepartment haspurchasedAmazonEC2ReservedInstances. Somedepartmentsdonot useall theReservedInstancesthat theypurchased, andotherdepartmentsneedmoreReservedInstancesthantheypurchased. ThecompanyneedstomanagetheAWSaccountsfor all thedepartmentssothat thedepartmentscansharetheReservedInstances.",
    "options": [
      "A. AWSSystemsManager",
      "B. Cost Explorer",
      "C. AWSTrustedAdvisor",
      "D. AWSOrganizations"
    ],
    "answer": "D",
    "raw_answer": "AWSOrganizationsallowsmultipleaccountswithinanorganizationtoshareReservedInstances, optimizingcost efficiencyandresourceutilizationacrossdepartments."
  },
  {
    "id": 6,
    "question": "Whichcomponent of theAWSglobal infrastructureismadeupof oneormorediscretedatacentersthat haveredundant power, networking, andconnectivity?",
    "options": [
      "A. AWSRegion",
      "B. AvailabilityZone",
      "C. Edgelocation",
      "D. AWSOutposts"
    ],
    "answer": "B",
    "raw_answer": "AnAvailabilityZoneconsistsof oneor moreisolateddatacenterswithredundant power,networking, andconnectivity. It isdesignedtoprovidehighavailabilityandfault tolerance."
  },
  {
    "id": 7,
    "question": "Whichdutiesaretheresponsibilityof acompanythat isusingAWSLambda?",
    "options": [
      "A. Securityinsideof code",
      "B. Selectionof CPUresources",
      "C. Patchingof operatingsystem",
      "D. Writingandupdatingof code",
      "E. Securityof underlyinginfrastructure"
    ],
    "answer": "A, D",
    "raw_answer": "WithAWSLambda, AWSmanagestheunderlyinginfrastructure, includingOSpatchingandresourceselection. Thecompanyisresponsiblefor writingsecurecodeandensuringitsfunctionality."
  },
  {
    "id": 8,
    "question": "WhichAWSservicesor featuresprovidedisaster recoverysolutionsforAmazonEC2instances?",
    "options": [
      "A. ReservedInstances",
      "B. EC2AmazonMachineImages(AMIs)",
      "C. AmazonElasticBlockStore(AmazonEBS) snapshots",
      "D. AWSShield",
      "E. AmazonGuardDuty"
    ],
    "answer": "B, C",
    "raw_answer": "AMIsprovidepre-configuredtemplatesfor quickinstancerecovery. EBSsnapshotsenablepoint-in-timebackupsof volumesfor disaster recoveryincaseof dataloss."
  },
  {
    "id": 9,
    "question": "AcompanyismigratingtotheAWSCloudinsteadof runningitsinfrastructureonpremises. Whichof thefollowingareadvantagesof thismigration?(Choosetwo.)",
    "options": [
      "A. Eliminationof theneedtoperformsecurityauditing",
      "B. Increasedglobal reachandagility",
      "C. Abilitytodeploygloballyinminutes",
      "D. Eliminationof thecost of ITstaff members",
      "E. Redundancybydefault for all computeservices"
    ],
    "answer": "B, C",
    "raw_answer": "AWSenablesbusinessestodeployresourcesgloballyinminutes, enhancingagilityandreach.WhilesecurityauditingandITstaff costsmaybereduced, theyarenot entirelyeliminatedinthecloud."
  },
  {
    "id": 10,
    "question": "Auser iscomparingpurchaseoptionsfor anapplicationthat runsonAmazonEC2andAmazonRDS. Theapplicationcannot sustainanyinterruption. Theapplicationexperiencesapredictableamount of usage, includingsomeseasonal spikesthat last onlyafewweeksat atime. It isnot possibletomodifytheapplication. WhichpurchaseoptionmeetstheserequirementsMOSTcost-effectively?",
    "options": [
      "A. ReviewtheAWSMarketplaceandbuyPartial Upfront ReservedInstancestocoverthepredictedandseasonal load.",
      "B. BuyReservedInstancesfor thepredictedamount of usagethroughout theyear. Allowanyseasonal usagetorunonSpot Instances.",
      "C. BuyReservedInstancesfor thepredictedamount of usagethroughout theyear. Allowanyseasonal usagetorunat anOn-Demandrate.",
      "D. BuyReservedInstancestocover all potential usagethat resultsfromtheseasonal usage."
    ],
    "answer": "C",
    "raw_answer": "ReservedInstancesarecost-effectivefor predictableworkloads, provid"
  },
  {
    "id": 11,
    "question": "WhichAWSserviceor tool providesinformationabout monthlycostsofusingAmazonEC2andAmazonRDSfor thepast year?",
    "options": [
      "A. AWSTrustedAdvisor",
      "B. Cost Explorer",
      "C. AmazonForecast",
      "D. AmazonCloudWatch"
    ],
    "answer": "B. Cost Explorer",
    "raw_answer": "AWSCost Explorer isspecificallydesignedtohelpusersvisualizeandanalyzetheir AWSspending. It providesdetailedreportsof costsfor serviceslikeAmazonEC2andAmazonRDSover aspecifiedtimeperiod, suchasthepast year."
  },
  {
    "id": 12,
    "question": "WhichAWSsolutionshouldthecompanyusetomaximizeoperationalefficiencyandminimizethecost of runninganapplicationwithashort runtime, invokedbydatachangesor systemstateshifts?",
    "options": [
      "A. AmazonEC2On-DemandInstances",
      "B. AWSLambda",
      "C. AmazonEC2ReservedInstances",
      "D. AmazonEC2Spot Instances"
    ],
    "answer": "B. AWSLambda",
    "raw_answer": "AWSLambdaisaserverlesscomputeservicethat automaticallyscalesbasedondemand. It isideal for short-livedtasksandapplicationsthat aretriggeredbyevents, suchaschangesindataor systemstate, asit minimizescostsbychargingonlyfor thecomputetimeused."
  },
  {
    "id": 13,
    "question": "WhichAWSserviceor featureallowsuserstoconnect withanddeployAWSservicesprogrammatically?",
    "options": [
      "A. AWSManagement Console",
      "B. AWSCodePipeline",
      "C. AWSsoftwaredevelopment kits(SDKs)",
      "D. AWSCloud9"
    ],
    "answer": "C. AWSsoftwaredevelopment kits(SDKs)",
    "raw_answer": "AWSSDKsarelibrariesthat provideaprogramminginterfacefor connectingwithanddeployingAWSservicesprogrammatically. Theyallowdeveloperstointeract withAWSservicesusingvariousprogramminglanguages, suchasPython, Java, or Node.js."
  },
  {
    "id": 14,
    "question": "Whichfactor will havetheMOSTeffect oncost for adatalakeusingAmazonS3?",
    "options": [
      "A. Theselectionof S3storagetiers",
      "B. Chargestotransfer existingdataintoAmazonS3",
      "C. Theadditionof S3bucket policies",
      "D. S3ingest feesfor eachrequest"
    ],
    "answer": "A. Theselectionof S3storagetiers",
    "raw_answer": "Theselectionof S3storagetiers(e.g., Standard, Intelligent-Tiering, Glacier) hasthemostsignificant impact oncost, aseachtier hasdifferent pricingmodelsbasedonaccessfrequencyandretrieval times. Thiscanaffect theoverall cost of storingandaccessingdatainthedatalake."
  },
  {
    "id": 15,
    "question": "What istheMOSTcost-effectiveinstancepurchasingoptionfor a12-month, always-availableecommerceapplicationrunningonAmazonEC2?",
    "options": [
      "A. Spot Instances",
      "B. SavingsPlans",
      "C. DedicatedHosts",
      "D. On-DemandInstances"
    ],
    "answer": "B. SavingsPlans",
    "raw_answer": "SavingsPlansoffer significant savings(upto72%) comparedtoOn-DemandInstanceswhenyoucommit toaconsistent usagelevel for a1- or 3-year term. Thisisthemost cost-effectiveoptionfor analways-availableapplicationwithpredictableusageover 12months."
  },
  {
    "id": 16,
    "question": "WhichAWSserviceor featureallowsuserstoconnect withanddeployAWSservicesprogrammatically?",
    "options": [
      "A. Cost allocationtags",
      "B. Keypairs",
      "C. AmazonInspector",
      "D. AWSTrustedAdvisor"
    ],
    "answer": "A. Cost allocationtags",
    "raw_answer": "Cost allocationtagshelptrackcostsbyassociatingAWSresourceswithspecificbusinessunits,projects, or departments. Thishelpsusersmanageandallocatecostsprogrammatically,allowingfor better cost trackingandreporting."
  },
  {
    "id": 17,
    "question": "WhichAWSserviceor featurewill helpacompanymigrateitsworkloadstoAWSwithout expertiseinAWSCloudcomputing?",
    "options": [
      "A. AWSTrustedAdvisor",
      "B. AWSConsultingPartners",
      "C. AWSArtifacts",
      "D. AWSManagedServices"
    ],
    "answer": "B. AWSConsultingPartners",
    "raw_answer": "AWSConsultingPartnersarethird-partyorganizationswithexpertiseinAWScloudcomputing.Theycanassist withmigrationsbyprovidingguidance, best practices, andhands-onsupport,makingthemideal for companieslackingin-houseAWSexpertise."
  },
  {
    "id": 18,
    "question": "WhichAWSserviceor tool shouldacompanyusetocentrallyrequest andtrackservicelimit increases?",
    "options": [
      "A. AWSConfig",
      "B. ServiceQuotas",
      "C. AWSServiceCatalog",
      "D. AWSBudgets"
    ],
    "answer": "B. ServiceQuotas",
    "raw_answer": "ServiceQuotasallowsuserstoviewandmanageAWSservicelimits(quotas). It enablesuserstorequest increasesfor servicelimitsandtracktheir usage, makingit thebest tool for managingresourcelimitsacrossAWSservices."
  },
  {
    "id": 19,
    "question": "WhichdocumentationdoesAWSArtifact provide?",
    "options": [
      "A. AmazonEC2termsandconditions",
      "B. AWSISOcertifications",
      "C. Ahistoryof acompany'sAWSspending",
      "D. Alist of previous-generationAmazonEC2instancetypes"
    ],
    "answer": "B. AWSISOcertifications",
    "raw_answer": "AWSArtifact providesaccesstoAWScompliancereportsandsecuritydocumentation, includingISOcertifications, whichhelpcustomersassessAWS’scompliancewithvariousstandards."
  },
  {
    "id": 20,
    "question": "WhichtaskrequiresusingAWSaccount root user credentials?",
    "options": [
      "A. Viewingbillinginformation",
      "B. ChangingtheAWSSupport plan",
      "C. StartingandstoppingAmazonEC2instances",
      "D. OpeninganAWSSupport case"
    ],
    "answer": "A. Viewingbillinginformation",
    "raw_answer": "Theroot user isrequiredfor tasksthat involvesensitiveaccount management, suchasviewingbillinginformation. Other taskslikestartingEC2instancesor openingsupport casescanbedonewithIAMuser permissions, but billingaccessisrestrictedtotheroot user for securityreasons."
  },
  {
    "id": 21,
    "question": "Acompanyneedstosimultaneouslyprocesshundredsof requestsfromdifferent users. Whichcombinationof AWSservicesshouldthecompanyusetobuildanoperationallyefficientsolution?",
    "options": [
      "A. AmazonSimpleQueueService(AmazonSQS) andAWSLambda",
      "B. AWSDataPipelineandAmazonEC2",
      "C. AmazonKinesisandAmazonAthena",
      "D. AWSAmplifyandAWSAppSync"
    ],
    "answer": "A. AmazonSimpleQueueService(AmazonSQS) andAWSLambda",
    "raw_answer": " AmazonSQSisafullymanagedmessagequeueservicethat helpsdecoupleandscalemicroservices, distributedsystems, andserverlessapplications. AWSLambdacanbeusedtoautomaticallyproce"
  },
  {
    "id": 22,
    "question": "requestsfromdifferent users. Whichcombinationof AWSservicesshouldthecompanyusetobuildanoperationallyefficientsolution? A. AmazonSimpleQueueService(AmazonSQS) andAWSLambdaB. AWSDataPipelineandAmazonEC2C. AmazonKinesisandAmazonAthenaD. AWSAmplifyandAWSAppSync",
    "options": [
      "A. AmazonSimpleQueueService(AmazonSQS) andAWSLambda",
      "B. AWSDataPipelineandAmazonEC2",
      "C. AmazonKinesisandAmazonAthena",
      "D. AWSAmplifyandAWSAppSync"
    ],
    "answer": "A. AmazonSimpleQueueService(AmazonSQS) andAWSLambda",
    "raw_answer": "AmazonSQSisafullymanagedmessagequeueservicethat helpsdecoupleandscalemicroservices, distributedsystems, andserverlessapplications. AWSLambdacanbeusedtoautomaticallyprocessrequestsfromthequeue, enablingthecompanytohandlehundredsof requestsefficientlywithout managingservers."
  },
  {
    "id": 22,
    "question": "What isthescopeof aVPCwithintheAWSnetwork? A. AVPCcanspanall AvailabilityZonesglobally.B. AVPCmust spanat least twosubnetsineachAWSRegion.C. AVPCmust spanat least twoedgelocationsineachAWSRegion.D. AVPCcanspanall AvailabilityZoneswithinanAWSRegion.",
    "options": [
      "A. AVPCcanspanall AvailabilityZonesglobally.",
      "B. AVPCmust spanat least twosubnetsineachAWSRegion.",
      "C. AVPCmust spanat least twoedgelocationsineachAWSRegion.",
      "D. AVPCcanspanall AvailabilityZoneswithinanAWSRegion."
    ],
    "answer": "D. AVPCcanspanall AvailabilityZoneswithinanAWSRegion.",
    "raw_answer": "AVirtual PrivateCloud(VPC) isalogicallyisolatednetworkwithinaspecificAWSRegion, andit canspanmultipleAvailabilityZoneswithinthat regiontoprovidehighavailabilityandfault tolerance."
  },
  {
    "id": 23,
    "question": "Whichof thefollowingarecomponentsof anAWSSite-to-SiteVPNconnection?(Choosetwo.) A. AWSStorageGatewayB. Virtual privategatewayC. NATgatewayD. Customer gatewayE. Internet gateway",
    "options": [
      "A. AWSStorageGateway",
      "B. Virtual privategateway",
      "C. NATgateway",
      "D. Customer gateway",
      "E. Internet gateway"
    ],
    "answer": "B. Virtual privategateway, D. Customer gateway",
    "raw_answer": "AnAWSSite-to-SiteVPNconnectionconsistsof twocomponents: theVirtualPrivateGatewayontheAWSsideandtheCustomer Gatewayonthecustomer'sside. Thesecomponentsestablishasecureconnectionbetweenthecustomer'son-premisesnetworkandAWS."
  },
  {
    "id": 24,
    "question": "AcompanyneedstoestablishaconnectionbetweentwoVPCs. TheVPCsarelocatedintwodifferent AWSRegions. Thecompanywantstousetheexistinginfrastructureof theVPCsforthisconnection.WhichAWSserviceor featurecanbeusedtoestablishthisconnection? A. AWSClient VPNB. VPCpeeringC. AWSDirect ConnectD. VPCendpoints",
    "options": [
      "A. AWSClient VPN",
      "B. VPCpeering",
      "C. AWSDirect Connect",
      "D. VPCendpoints"
    ],
    "answer": "B. VPCpeering",
    "raw_answer": "VPCpeeringallowsyoutoconnect twoVPCsindifferent AWSregions, enablingresourcesinbothVPCstocommunicatewitheachother usingprivateIPaddresses."
  },
  {
    "id": 25,
    "question": "AccordingtotheAWSsharedresponsibilitymodel, what responsibilitydoesacustomer havewhenusingAmazonRDStohost adatabase? A. ManageconnectionstothedatabaseB. Install Microsoft SQLServerC. Designencryption-at-rest strategiesD. Applyminor databasepatches",
    "options": [
      "A. Manageconnectionstothedatabase",
      "B. Install Microsoft SQLServer",
      "C. Designencryption-at-rest strategies",
      "D. Applyminor databasepatches"
    ],
    "answer": "C. Designencryption-at-rest strategies",
    "raw_answer": "IntheAWSsharedresponsibilitymodel, AWSisresponsiblefor thesecurityof thecloudinfrastructure, whilethecustomer isresponsiblefor securingtheir data. Thisincludestaskslikedesigningencryption-at-rest strategiesfor datastoredinAmazonRDS."
  },
  {
    "id": 26,
    "question": "What aresomeadvantagesof usingAmazonEC2instancestohost applicationsintheAWSCloudinsteadof onpremises?(Choosetwo.) A. EC2includesoperatingsystempatchmanagement.B. EC2integrateswithAmazonVPC, AWSCloudTrail, andAWSIdentityandAccessManagement (IAM).C. EC2hasa100%servicelevel agreement (SLA).D. EC2hasaflexible, pay-as-you-gopricingmodel.E. EC2hasautomaticstoragecost optimization.",
    "options": [
      "A. EC2includesoperatingsystempatchmanagement.",
      "B. EC2integrateswithAmazonVPC, AWSCloudTrail, andAWSIdentityandAccessManagement (IAM).",
      "C. EC2hasa100%servicelevel agreement (SLA).",
      "D. EC2hasaflexible, pay-as-you-gopricingmodel.",
      "E. EC2hasautomaticstoragecost optimization."
    ],
    "answer": "B. EC2integrateswithAmazonVPC, AWSCloudTrail, andAWSIdentityandAccessManagement (IAM), D. EC2hasaflexible, pay-as-you-gopricingmodel",
    "raw_answer": "EC2integratesseamlesslywithAWSserviceslikeVPC, IAM, andCloudTrail,providingasecureandscalableenvironment. Additionally, EC2offersaflexiblepay-as-you-gopricingmodel, whichisakeyadvantageover traditional on-premiseshosting."
  },
  {
    "id": 27,
    "question": "Auser needstodeterminewhether anAmazonEC2instance'ssecuritygroupsweremodifiedinthelast month.Howcantheuser seeif achangewasmade? A. UseAmazonEC2toseeif thesecuritygroupwaschanged.B. UseAWSIdentityandAccessManagement (IAM) toseewhichuser or rolechangedthesecuritygroup.C. UseAWSCloudTrail toseeif thesecuritygroupwaschanged.D. UseAmazonCloudWatchtoseeif thesecuritygroupwaschanged.",
    "options": [
      "A. UseAmazonEC2toseeif thesecuritygroupwaschanged.",
      "B. UseAWSIdentityandAccessManagement (IAM) toseewhichuser or rolechangedthesecuritygroup.",
      "C. UseAWSCloudTrail toseeif thesecuritygroupwaschanged.",
      "D. UseAmazonCloudWatchtoseeif thesecuritygroupwaschanged."
    ],
    "answer": "C. UseAWSCloudTrail toseeif thesecuritygroupwaschanged.",
    "raw_answer": "AWSCloudTrail recordsAPI callsandchangesmadetoAWSresources,includingchangestosecuritygroups. ByreviewingCloudTrail logs, userscanseeif andwhenchangesweremadetothesecuritygroup."
  },
  {
    "id": 28,
    "question": "WhichAWSservicewill helpprotect applicationsrunningonAWSfromDDoSattacks? A. AmazonGuardDutyB. AWSWAFC. AWSShieldD. AmazonInspector",
    "options": [
      "A. AmazonGuardDuty",
      "B. AWSWAF",
      "C. AWSShield",
      "D. AmazonInspector"
    ],
    "answer": "C. AWSShield",
    "raw_answer": "AWSShieldisamanagedDistributedDenial of Service(DDoS) protectionservicethat helpsprotect applicationsrunningonAWSfromDDoSattacks."
  },
  {
    "id": 29,
    "question": "WhichAWSserviceor featureactsasafirewall for AmazonEC2instances? A. NetworkACLB. Elasticnetworkinterface C. AmazonVPCD. Securitygroup",
    "options": [
      "A. NetworkACL",
      "B. Elasticnetworkinterface",
      "C. AmazonVPC",
      "D. Securitygroup"
    ],
    "answer": "D. Securitygroup",
    "raw_answer": "Asecuritygroupactsasavirtual firewall for AmazonEC2instances, controllinginboundandoutboundtrafficbasedonspecifiedrules. It operatesat theinstancelevel."
  },
  {
    "id": 30,
    "question": "HowdoestheAWSCloudpricingmodel differ fromthetraditional on-premisesstoragepricingmodel? A. AWSresourcesdonot incur costsB. TherearenoinfrastructureoperatingcostsC. Therearenoupfront cost commitmentsD. Therearenosoftwarelicensingcosts",
    "options": [
      "A. AWSresourcesdonot incur costs",
      "B. Therearenoinfrastructureoperatingcosts",
      "C. Therearenoupfront cost commitments",
      "D. Therearenosoftwarelicensingcosts"
    ],
    "answer": "C. Therearenoupfront cost commitments",
    "raw_answer": "TheAWSCloudpricingmodel followsapay-as-you-gomodel, meaningcustomersonlypayfor theresourcestheyusewithout anyupfront cost commitments. Thisisdifferent fromtraditional on-premisesstorage, whichtypicallyinvolvesupfront capitalexpenditure."
  },
  {
    "id": 31,
    "question": "AcompanyhasasingleAmazonEC2instance. Thecompanywantstoadopt ahighlyavailablearchitecture.What canthecompanydotomeet thisrequirement? A. Scaleverticallytoalarger EC2instancesize.B. ScalehorizontallyacrossmultipleAvailabilityZones.C. PurchaseanEC2DedicatedInstance.D. ChangetheEC2instancefamilytoacomputeoptimizedinstance.",
    "options": [
      "A. Scaleverticallytoalarger EC2instancesize.",
      "B. ScalehorizontallyacrossmultipleAvailabilityZones.",
      "C. PurchaseanEC2DedicatedInstance.",
      "D. ChangetheEC2instancefamilytoacomputeoptimizedinstance."
    ],
    "answer": "B. ScalehorizontallyacrossmultipleAvailabilityZones.",
    "raw_answer": "To achieve high availability, the company should scale horizontally by deploying the application across multiple Availability Zones."
  },
  {
    "id": 32,
    "question": "Which of the following best describes the concept of 'serverless computing'?",
    "options": [
      "A. Running applications on dedicated servers that you manage.",
      "B. Running applications without managing servers, where the cloud provider handles scaling and infrastructure.",
      "C. Using virtual machines to host your applications.",
      "D. Deploying applications to a single server to reduce costs."
    ],
    "answer": "B. Running applications without managing servers, where the cloud provider handles scaling and infrastructure.",
    "raw_answer": "Serverless computing allows you to run your code without managing servers. The cloud provider automatically handles scaling and infrastructure, allowing you to focus on your application logic."
  },
  {
    "id": 34,
    "question": "ipleAvailabilityZones.C. PurchaseanEC2DedicatedInstance.D. ChangetheEC2instancefamilytoacomputeoptimizedinstance.",
    "options": [
      "A. Elasticity",
      "B. Flexibility",
      "C. Agility",
      "D. Resilience"
    ],
    "answer": "C",
    "raw_answer": "Agilityreferstotheabilitytoquicklyadapt anddeploychanges. BymigratingtotheAWSCloud,thecompanyhasreduceddeployment timessignificantly, whichdemonstratesincreasedagility."
  },
  {
    "id": 32,
    "question": "Acompany’son-premisesapplicationdeployment cyclewas3-4weeks. After migratingtotheAWSCloud, thecompanycandeploytheapplicationin2-3days.Whichbenefit hasthiscompanyexperiencedbymovingtotheAWSCloud?",
    "options": [
      "A. Elasticity",
      "B. Flexibility",
      "C. Agility",
      "D. Resilience"
    ],
    "answer": "C",
    "raw_answer": "Agilityreferstotheabilitytoquicklyadapt anddeploychanges. BymigratingtotheAWSCloud,thecompanyhasreduceddeployment timessignificantly, whichdemonstratesincreasedagility."
  },
  {
    "id": 33,
    "question": "Whichof thefollowingareincludedinAWSEnterpriseSupport?(Choosetwo.)",
    "options": [
      "A. AWStechnical account manager (TAM)",
      "B. AWSpartner-ledsupport",
      "C. AWSProfessional Services",
      "D. Support of third-partysoftwareintegrationtoAWSE."
    ],
    "answer": "A, E",
    "raw_answer": "AWSEnterpriseSupport includesaccesstoaTechnical Account Manager (TAM) andoffersa5-minuteresponsetimefor critical issues. Thislevel of support isdesignedfor largeorganizationswithcomplexneeds."
  },
  {
    "id": 34,
    "question": "Aglobal mediacompanyusesAWSOrganizationstomanagemultipleAWSaccounts.WhichAWSserviceor featurecanthecompanyusetolimit theaccesstoAWSservicesformember accounts?",
    "options": [
      "A. AWSIdentityandAccessManagement (IAM)",
      "B. Servicecontrol policies(SCPs)",
      "C. Organizational units(OUs)",
      "D. Accesscontrol lists(ACLs)"
    ],
    "answer": "B",
    "raw_answer": "ServiceControl Policies(SCPs) areusedinAWSOrganizationstoset permissionguardrailsformember accounts. Theyhelplimit theaccesstoAWSservicesfor specificaccountswithintheorganization."
  },
  {
    "id": 35,
    "question": "Acompanywantstolimit itsemployees' AWSaccesstoaportfolioof predefinedAWSresources.WhichAWSsolutionshouldthecompanyusetomeet thisrequirement?",
    "options": [
      "A. AWSConfig",
      "B. AWSsoftwaredevelopment kits(SDKs)",
      "C. AWSServiceCatalog",
      "D. AWSAppSync"
    ],
    "answer": "C",
    "raw_answer": "AWSServiceCatalogallowsorganizationstocreateandmanageapprovedcatalogsofresources. Employeescanaccessonlythepredefinedset of resourcesinthecatalog, ensuringcontrolledaccesstoAWSresources."
  },
  {
    "id": 36,
    "question": "Anonlinecompanywasrunningaworkloadonpremisesandwasstrugglingtolaunchnewproductsandfeatures. After migratingtheworkloadtoAWS, thecompanycanquicklylaunchproductsandfeaturesandcanscaleitsinfrastructureasrequired.WhichAWSCloudvaluepropositiondoesthisscenariodescribe?",
    "options": [
      "A. Businessagility",
      "B. Highavailability",
      "C. Security",
      "D. Centralizedauditing"
    ],
    "answer": "A",
    "raw_answer": "Businessagilityreferstotheabilitytoquicklyadapt tomarket changesandlaunchnewproductsor features. BymigratingtoAWS, thecompanygainstheflexibilitytoscaleitsinfrastructureanddeployquickly."
  },
  {
    "id": 37,
    "question": "Whichof thefollowingareadvantagesof theAWSCloud?(Choosetwo.)",
    "options": [
      "A. AWSmanagement of user-ownedinfrastructure",
      "B. Abilitytoquicklychangerequiredcapacity",
      "C. Higheconomiesof scale",
      "D. Increaseddeployment timetomarket",
      "E. Increasedfixedexpenses"
    ],
    "answer": "B, C",
    "raw_answer": "AWSCloudofferstheabilitytoquicklyadjust capacitybasedondemand, andtheeconomiesofscalebenefit allowsAWStooffer lower costsduetolarge-scaleoperations."
  },
  {
    "id": 38,
    "question": "AWShastheabilitytoachievelower pay-as-you-gopricingbyaggregatingusageacrosshundredsof thousandsof users.Thisdescribeswhichadvantageof theAWSCloud?",
    "options": [
      "A. Launchgloballyinminutes",
      "B. Increasespeedandagility",
      "C. Higheconomiesof scale",
      "D. Noguessingabout computecapacity"
    ],
    "answer": "C",
    "raw_answer": "Byaggregatingusageacrossalargenumber of customers, AWSachieveseconomiesof scale,allowingit tooffer lower pricingfor services."
  },
  {
    "id": 39,
    "question": "Acompanyhasadatabaseserver that isalwaysrunning. Thecompanyhoststheserver onAmazonEC2instances. Theinstancesizesaresuitablefor theworkload. Theworkloadwill runfor 1year.WhichEC2instancepurchasingoptionwill meet theserequirementsMOSTcost-effectively?",
    "options": [
      "A. StandardReservedInstances",
      "B. On-DemandInstances",
      "C. Spot Instances",
      "D. ConvertibleReservedInstances"
    ],
    "answer": "A",
    "raw_answer": "StandardReservedInstancesoffer significant savingsover On-DemandInstancesfor long-termworkloads, especiallywhentheinstanceusageispredictable, likeinthiscasefor 1year."
  },
  {
    "id": 40,
    "question": "Acompanyisdevelopingamobileappthat needsahigh-performanceNoSQLdatabase.WhichAWSservicescouldthecompanyusefor thisdatabase?(Choosetwo.)",
    "options": [
      "A. AmazonAurora",
      "B. AmazonRDS",
      "C. AmazonRedshift",
      "D. AmazonDocumentDB(withMongoDBcompatibility)",
      "E. AmazonDynamoDB"
    ],
    "answer": "D, E",
    "raw_answer": "BothAmazonDynamoDBandAmazonDocumentDBarehigh-performanceNoSQLdatabasessuitablefor mobileappdevelopment. DynamoDBisafullymanagedkey-valueanddocumentdatabase, whileDocumentDBiscompatiblewithMongoDB."
  },
  {
    "id": 41,
    "question": " Whichtasksaretheresponsibilityof AWS, accordingtotheAWSsharedresponsibilitymodel?(Choosetwo.)",
    "options": [
      "A. PatchtheAmazonEC2guest operatingsystem.",
      "B. Upgradethefirmwareof thenetworkinfrastructure.",
      "C. Applypasswordrotationfor IAMusers.",
      "D. Maintainthephysical securityof edgelocations.",
      "E. Maintainleast privilegeaccesstotheroot user account."
    ],
    "answer": "B, D",
    "raw_answer": "AccordingtotheAWSsharedresponsibilitymodel, AWSisresponsiblefor thesecurityof thecloud, whichincludesmaintainingthephysical securityof edgelocations(D) andupgradingthefirmwareof thenetworkinfrastructure(B).Thecustomer isresponsiblefor managingtheoperatingsystem(A), IAMuser passwords(C),andleast privilegeaccess(E)."
  },
  {
    "id": 42,
    "question": " Whichof thefollowingarefeaturesof networkACLsastheyareusedintheAWSCloud?(Choosetwo.)",
    "options": [
      "A. Theyarestateless.",
      "B. Theyarestateful.",
      "C. Theyevaluateall rulesbeforeallowingtraffic.",
      "D. Theyprocessrulesinorder, startingwiththelowest numberedrule, whendecidingwhether toallowtraffic.",
      "E. Theyopera"
    ],
    "answer": "B, D",
    "raw_answer": "NetworkACLsarestateful, meaning theytrack connections and allow return traffic. Theyprocessrulesinorder, startingwiththelowest numberedrule, whendecidingwhether toallowtraffic."
  },
  {
    "id": 46,
    "question": "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)",
    "options": [
      "A. They are stateless.",
      "B. They are stateful.",
      "C. They evaluate all rules before allowing traffic.",
      "D. They process rules in order, starting with the lowest numbered rule, when determining whether to allow traffic."
    ],
    "answer": "A, D",
    "raw_answer": "NetworkACLsinAWSarestateless(A), meaningtheydon't trackthestateof connections. Theyprocessrulesinorder, startingwiththelowest numberedrule(D), whendeterminingwhether toallowtraffic."
  },
  {
    "id": 43,
    "question": "A company has designed its AWS Cloud infrastructure to run workloadseffectively. The company also has protocols in place to continuously improve supporting processes. Which pillar of the AWS Well-Architected Framework does this scenario represent?",
    "options": [
      "A. Security",
      "B. Performance efficiency",
      "C. Cost optimization",
      "D. Operational excellence"
    ],
    "answer": "D",
    "raw_answer": "Thescenariodescribescontinuousimprovement of processes, whichispart of theOperationalexcellencepillar of theAWSWell-ArchitectedFramework. Thispillar focusesonoperationsandongoingimprovementstoenhanceperformanceandreducerisks."
  },
  {
    "id": 44,
    "question": "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
    "options": [
      "A. Amazon Route53",
      "B. Amazon Macie",
      "C. AWS Direct Connect",
      "D. AWS PrivateLink"
    ],
    "answer": "C",
    "raw_answer": "AWSDirect Connect (C) providesadedicated, privatenetworkconnectionbetweenanon-premisesdatacenter andAWS. AmazonRoute53(A) isfor DNSmanagement, AmazonMacie(B) isfor datasecurity, andAWSPrivateLink(D) isusedfor privateaccesstoservicesinVPCs, not direct connectionstoon-premisesworkloads."
  },
  {
    "id": 45,
    "question": "A company needs to graphically visualize AWS billing and usage over time. The company also needs information about its AWS monthly costs. Which AWS Billing and Cost Management tool provides this data in a graphical format?",
    "options": [
      "A. AWS Bills",
      "B. Cost Explorer",
      "C. AWS Cost and Usage Report",
      "D. AWS Budgets"
    ],
    "answer": "B",
    "raw_answer": "AWSCost Explorer (B) allowsyoutovisualizeandanalyzeyour AWSspendingandusageovertimeinagraphical format.AWSBills(A) showsdetailedbillinginformation, AWSCost andUsageReport (C) providesrawdata, andAWSBudgets(D) helpstrackspendingbut doesnot providegraphical usagedata."
  },
  {
    "id": 47,
    "question": "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?",
    "options": [
      "A. Use a monolithic design.",
      "B. Design for automation.",
      "C. Design for single points of failure.",
      "D. Loosely couple components."
    ],
    "answer": "D",
    "raw_answer": "Looselycouplingcomponents(D) helpsisolatefailuresandensuresthat onefailuredoesnotaffect other components.Amonolithicdesign(A) istheoppositeof loosecoupling, anddesigningfor singlepointsoffailure(C) isnot arecommendedpractice. Designfor automation(B) focusesonautomatingprocesses, not failureisolation."
  },
  {
    "id": 48,
    "question": "Which AWS services are managed database services? (Choose two.)",
    "options": [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. Amazon S3",
      "C. Amazon RDS",
      "D. Amazon Elastic File System (Amazon EFS)",
      "E. Amazon DynamoDB"
    ],
    "answer": "C, E",
    "raw_answer": "AmazonRDS(C) andAmazonDynamoDB(E) aremanageddatabaseservicesprovidedbyAWS.AmazonEBS(A) isablockstorageservice, AmazonS3(B) isobject storage, andAmazonEFS(D) isamanagedfilestorageservice."
  },
  {
    "id": 49,
    "question": "A company is using the AWS Free Tier for several AWS services for an application. What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?",
    "options": [
      "A. The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage.",
      "B. AWS Support will contact the company to set up standard service charges.",
      "C. The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period.",
      "D. The company's AWS account will be frozen and can be restarted after a payment plan is established."
    ],
    "answer": "A",
    "raw_answer": "OncetheAWSFreeTier usageexpiresor exceedsthelimits, thecompanywill bechargedatthestandardpay-as-yougorates(A)."
  },
  {
    "id": 50,
    "question": "A company recently deployed an Amazon RDS instance in its VPC. The company needs to implement a stateful firewall to limit traffic to the private corporate network. Which AWS service or features should the company use to limit network traffic directly to its RDS instance?",
    "options": [
      "A. Network ACLs",
      "B. Security Groups",
      "C. AWS WAF",
      "D. Amazon GuardDuty"
    ],
    "answer": "B",
    "raw_answer": "Securitygroups(B) arestateful firewallsthat control inboundandoutboundtraffictoAWSresources, includingRDSinstances.NetworkACLs(A) arestatelessandnot ideal for limitingtraffictospecificinstances. AWSWAF(C) isusedfor webapplicationprotection, andAmazonGuardDuty(D) isathreat detectionservice, not afirewall."
  },
  {
    "id": 51,
    "question": "Which AWS service uses machine learning to help discover, monitor, and protect sensitive data that is stored in Amazon S3 buckets?",
    "options": [
      "A. AWS Shield",
      "B. Amazon Macie",
      "C. AWS Network Firewall",
      "D. Amazon Cognito"
    ],
    "answer": "B",
    "raw_answer": "AmazonMacieisamachinelearning-poweredservicethat helpsdiscover,monitor, andprotect sensitivedatainAmazonS3. It canautomaticallyidentifysensitivedatasuchaspersonallyidentifiableinformation(PII) andp"
  },
  {
    "id": 51,
    "question": "Which AWS service uses machine learning to help discover, monitor, and protect sensitive data that is stored in Amazon S3 buckets?",
    "options": [
      "A. AWS Shield",
      "B. Amazon Macie",
      "C. AWS Network Firewall",
      "D. Amazon Cognito"
    ],
    "answer": "B",
    "raw_answer": "Amazon Macie is a machine learning-powered service that helps discover, monitor, and protect sensitive data in Amazon S3. It can automatically identify sensitive data such as personally identifiable information (PII) and provides visibility into how this data is being accessed."
  },
  {
    "id": 52,
    "question": "A company wants to improve the overall availability and performance of its applications that are hosted on AWS. Which AWS services should the company use?",
    "options": [
      "A. Amazon Connect",
      "B. Amazon Lightsail",
      "C. AWS Global Accelerator",
      "D. AWS Storage Gateway"
    ],
    "answer": "C",
    "raw_answer": "AWS Global Accelerator improves the availability and performance of applications by routing traffic to the optimal endpoint based on health, geography, and routing policies. It helps reduce latency and increases the performance of applications hosted on AWS."
  },
  {
    "id": 53,
    "question": "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
    "options": [
      "A. AWS Service Catalog",
      "B. AWS Systems Manager",
      "C. AWSIAM Access Analyzer",
      "D. AWS Organizations"
    ],
    "answer": "C",
    "raw_answer": "AWSIAM Access Analyzer helps identify resources, such as S3 buckets and IAM roles, that are shared with external entities. It provides visibility into unintended access to your AWS resources, ensuring that access policies are compliant with security best practices."
  },
  {
    "id": 54,
    "question": "A company does not want to rely on elaborate forecasting to determine its usage of computer resources. Instead, the company wants to pay only for the resources that it uses. The company also needs the ability to increase or decrease its resource usage to meet business requirements. Which pillar of the AWS Well-Architected Framework aligns with these requirements?",
    "options": [
      "A. Operational excellence",
      "B. Security",
      "C. Reliability",
      "D. Cost optimization"
    ],
    "answer": "D",
    "raw_answer": "The Cost Optimization pillar of the AWS Well-Architected Framework emphasizes the ability to control where the money is spent, including the use of pay-as-you-go pricing models, right-sizing resources, and scaling to meet demand while minimizing costs."
  },
  {
    "id": 55,
    "question": "A company wants to launch its workload on AWS and requires the system to automatically recover from failure. Which pillar of the AWS Well-Architected Framework includes this requirement?",
    "options": [
      "A. Cost optimization",
      "B. Operational excellence",
      "C. Performance efficiency",
      "D. Reliability"
    ],
    "answer": "D",
    "raw_answer": "The Reliability pillar focuses on ensuring that workloads can recover from failures and continue to function as expected. It involves designing systems that can automatically recover from failures, ensuring high availability and fault tolerance."
  },
  {
    "id": 56,
    "question": "A large enterprise with multiple VPCs in several AWS Regions around the world needs to connect and centrally manage network connectivity between its VPCs. Which AWS service or feature meets these requirements?",
    "options": [
      "A. AWS Direct Connect",
      "B. AWS Transit Gateway",
      "C. AWS Site-to-Site VPN",
      "D. VPC Endpoints"
    ],
    "answer": "B",
    "raw_answer": "AWS Transit Gateway allows enterprises to connect and manage network connectivity between multiple VPCs in different AWS Regions. It provides a centralized hub for managing VPCs and on-premises networks."
  },
  {
    "id": 57,
    "question": "Which AWS services support the creation of visual reports from AWS Cost and Usage Report data?",
    "options": [
      "A. Amazon Athena",
      "B. Amazon QuickSight",
      "C. Amazon CloudWatch",
      "D. AWS Organizations"
    ],
    "answer": "B",
    "raw_answer": "Amazon QuickSight is a business intelligence service that can create visual reports and dashboards from various data sources, including AWS Cost and Usage Reports. It enables organizations to visualize and analyze their AWS costs."
  },
  {
    "id": 58,
    "question": "Which AWS services should be used to monitor Amazon EC2 instances for CPU and network utilization?",
    "options": [
      "A. Amazon Inspector",
      "B. AWS CloudTrail",
      "C. Amazon CloudWatch",
      "D. AWS Config"
    ],
    "answer": "C",
    "raw_answer": "Amazon CloudWatch provides monitoring for AWS resources, including EC2 instances. It can track metrics such as CPU utilization, network traffic, disk usage, and more, providing insights into the performance of your EC2 instances."
  },
  {
    "id": 59,
    "question": "A company is preparing to launch a new webstore that is expected to receive high traffic for an upcoming event. The webstore runs only on AWS, and the company has an AWS Enterprise Support plan. Which AWS resource will provide guidance about how the company should scale its architecture and operational support during the event?",
    "options": [
      "A. AWS Abuse Team",
      "B. The designated AWS Technical Account Manager (TAM)",
      "C. AWS Infrastructure Event Management",
      "D. AWS Professional Services"
    ],
    "answer": "C",
    "raw_answer": "AWS Infrastructure Event Management provides guidance on scaling architecture and operational support during high-trafficevents. It helps ensure that the infrastructure is prepared to handle the expected load and provides support for event planning."
  },
  {
    "id": 60,
    "question": "A user wants to deploy a service to the AWS Cloud by using infrastructure-as-code (IaC) principles. Which AWS service can be used to meet this requirement?",
    "options": [
      "A. AWS Systems Manager",
      "B. AWS CloudFormation",
      "C. AWS CodeCommit",
      "D. AWS Config"
    ],
    "answer": "B",
    "raw_answer": "AWS CloudFormation is an infrastructure-as-code (IaC) service that allows users to define and provision AWS infrastructure using templates. It enables users to automate the deployment of resources and manage them as code."
  },
  {
    "id": 61,
    "question": "A company that has multiple business units wants to centrally manage and govern its AWS cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes. Which AWS service or tool should the company use?",
    "options": [
      "A. AWS Organizations",
      "B. Cost Explorer",
      "C. AWS Budgets",
      "D. AWS Trusted Advisor"
    ],
    "answer": "A",
    "raw_answer": "AWS Organizations allow you to centrally manage and govern multiple AWS accounts. It helps automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes, making it the best option for managing and governing AWS cloud environments across multiple business units."
  },
  {
    "id": 62,
    "question": "Which IT controls do AWS and the customer share, according to the AWS shared responsibility model? (Choose two.)",
    "options": [
      "A. Physical",
      "B. Data",
      "C. Application",
      "D. Network"
    ],
    "answer": "B, D",
    "raw_answer": "Data and Network are the primary areas of shared responsibility. AWS is responsible for the security *of* the cloud (infrastructure), while the customer is responsible for security *in* the cloud (data, applications, access)."
  },
  {
    "id": 71,
    "question": "Acompanyhasafleet of cargoships. Thecargoshipshavesensorsthat collect dataat sea,wherethereisintermittent or nointernet connectivity. Thecompanyneedstocollect, format, andprocessthedataat seaandmovethedatatoAWSlater.WhichAWSserviceshouldthecompanyusetomeet theserequirements? A. AWSIoTCoreB. AmazonLightsailC. AWSStorageGatewayD. AWSSnowball Edge",
    "options": [
      "A. AWSIoTCore",
      "B. AmazonLightsail",
      "C. AWSStorageGateway",
      "D. AWSSnowball Edge"
    ],
    "answer": "D",
    "raw_answer": "AWSSnowball Edgeisaphysical devicethat canbeusedtocollect andprocessdatainenvironmentswithlimitedconnectivity. It allowsfor offlinedataprocessingandlatertransfer toAWSwhenconnectivityisrestored."
  },
  {
    "id": 72,
    "question": "Aretail companyneedstobuildahighlyavailablearchitecturefor anewecommerceplatform.ThecompanyisusingonlyAWSservicesthat replicatedataacrossmultipleAvailabilityZones.WhichAWSservicesshouldthecompanyusetomeet thisrequirement?(Choosetwo.) A. AmazonEC2B. AmazonElasticBlockStore(AmazonEBS)C. AmazonAuroraD. AmazonDynamoDBE. AmazonRedshift",
    "options": [
      "A. AmazonEC2",
      "B. AmazonElasticBlockStore(AmazonEBS)",
      "C. AmazonAurora",
      "D. AmazonDynamoDB",
      "E. AmazonRedshift"
    ],
    "answer": "C",
    "raw_answer": "BothAmazonAurora(arelational databaseservice) andAmazonDynamoDB(aNoSQLdatabaseservice) providebuilt-inreplicationacrossmultipleAvailabilityZonesfor highavailability. AmazonEC2doesnot inherentlyreplicateacrossAZswithout additionalconfiguration. AmazonEBSprovidesblockstorage, but it doesn’t replicateautomaticallyacrossmultipleAZsunlessconfiguredwithamulti-AZsetup. AmazonRedshift isfor datawarehousing,andwhileit offershighavailability, it doesn’t focusonreplicationacrossAZsfor ecommerceusecases."
  },
  {
    "id": 73,
    "question": "Whichcharacteristicof theAWSCloudhelpsuserseliminateunderutilizedCPUcapacity? A. AgilityB. ElasticityC. ReliabilityD. Durability",
    "options": [
      "A. Agility",
      "B. Elasticity",
      "C. Reliability",
      "D. Durability"
    ],
    "answer": "B",
    "raw_answer": "Elasticityreferstotheabilitytoautomaticallyscaleresourcesupor downbasedondemand, whichhelpseliminateunderutilizedCPUcapacity."
  },
  {
    "id": 74,
    "question": "Servicecontrol policies(SCPs) managepermissionsfor whichof thefollowing? A. AvailabilityZonesB. AWSRegions C. AWSOrganizationsD. Edgelocations",
    "options": [
      "A. AvailabilityZones",
      "B. AWSRegions",
      "C. AWSOrganizations",
      "D. Edgelocations"
    ],
    "answer": "C",
    "raw_answer": "ServiceControl Policies(SCPs) areusedtomanagepermissionswithinAWSOrganizations, allowingadministratorstoset permissionboundariesfor accountsandorganizational units. SCPsdonot directlymanagepermissionsfor AvailabilityZones, AWSRegions, or edgelocations."
  },
  {
    "id": 75,
    "question": "WhichAWSservicecanbeusedtoencrypt dataat rest? A. AmazonGuardDutyB. AWSShieldC. AWSSecurityHubD. AWSKeyManagement Service(AWSKMS)",
    "options": [
      "A. AmazonGuardDuty",
      "B. AWSShield",
      "C. AWSSecurityHub",
      "D. AWSKeyManagement Service(AWSKMS)"
    ],
    "answer": "D",
    "raw_answer": "AWSKMSisaservicedesignedtocreateandmanagecryptographickeysforencryptingdataat rest, makingit thecorrect choice. AmazonGuardDutyisathreat detectionservice, AWSShieldprovidesDDoSprotection, andAWSSecurityHubisfor securitymanagement but not for encryption."
  },
  {
    "id": 76,
    "question": "Whichcharacteristicsareadvantagesof usingtheAWSCloud?(Choosetwo.) A. A100%servicelevel agreement (SLA) for all AWSservicesB. Computecapacitythat isadjustedondemandC. Availabilityof AWSSupport for codedevelopmentD. EnhancedsecurityE. Increasesincost andcomplexity",
    "options": [
      "A. A100%servicelevel agreement (SLA) for all AWSservices",
      "B. Computecapacitythat isadjustedondemand",
      "C. Availabilityof AWSSupport for codedevelopment",
      "D. Enhancedsecurity",
      "E. Increasesincost andcomplexity"
    ],
    "answer": "B, D",
    "raw_answer": "Oneof thekeyadvantagesof AWSCloudistheabilitytoadjust computecapacityondemand(elasticity). AWSalsoprovidesenhancedsecurityfeaturestoprotect dataandapplications."
  },
  {
    "id": 77,
    "question": "Auser isstoringobjectsinAmazonS3. Theuser needstorestrict accesstotheobjectstomeetcomplianceobligations.What shouldtheuser dotomeet thisrequirement? A. UseAWSSecretsManager.B. TagtheobjectsintheS3bucket.C. Usesecuritygroups.D. UsenetworkACLs.",
    "options": [
      "A. AWSSecretsManager",
      "B. TagtheobjectsintheS3bucket",
      "C. Securitygroups",
      "D. NetworkACLs"
    ],
    "answer": "B",
    "raw_answer": "TaggingobjectsinAmazonS3allowsuserstoapplyaccesscontrol policiesbasedonobject tags, whichcanbeuseful for compliancerequirements."
  },
  {
    "id": 78,
    "question": "Acompanywantstoconvert videofilesandaudiofilesfromtheir sourceformat intoaformatthat will playonsmartphones, tablets, andwebbrowsers.WhichAWSservicewill meet theserequirements? A. AmazonElasticTranscoderB. AmazonComprehendC. AWSGlueD. AmazonRekognition",
    "options": [
      "A. AmazonElasticTranscoder",
      "B. AmazonComprehend",
      "C. AWSGlue",
      "D. AmazonRekognition"
    ],
    "answer": "A",
    "raw_answer": "AmazonElasticTranscoder isaservicedesignedfor convertingmediafilesfromoneformat toanother, makingit ideal for thisusecase."
  },
  {
    "id": 79,
    "question": "Whichof thefollowingarebenefitsof AmazonEC2AutoScaling?(Choosetwo.) A. Improvedhealthandavailabilityof applicationsB. ReducednetworklatencyC. Optimizedperformanceandcosts D. Automatedsnapshotsof dataE. Cross-RegionReplication",
    "options": [
      "A. Improvedhealthandavailabilityof applications",
      "B. Reducednetworklatency",
      "C. Optimizedperformanceandcosts",
      "D. Automatedsnapshotsof data",
      "E. Cross-RegionReplication"
    ],
    "answer": "A, C",
    "raw_answer": "AmazonEC2AutoScalingautomaticallyadjuststhenumber of EC2instancesbasedondemand, improvingapplicationhealthandavailabilityandoptimizingperformanceandcosts."
  },
  {
    "id": 80,
    "question": "Acompanyhasseveral departments. Eachdepartment hasitsownAWSaccountsfor itsapplications. Thecompanywantsall AWScostsonasingleinvo",
    "options": [
      "A. A100%servicelevel agreement (SLA) for all AWSservices",
      "B. Computecapacitythat isadjustedondemand",
      "C. Availabilityof AWSSupport for codedevelopment",
      "D. Enhancedsecurity",
      "E. Increasesincost andcomplexity"
    ],
    "answer": "N/A",
    "raw_answer": "N/A"
  },
  {
    "id": 77,
    "question": "lication Answer: A. Improvedhealthandavailabilityof applications, C. OptimizedperformanceandcostsExplanation: AmazonEC2AutoScalingautomaticallyadjuststhenumber of EC2instancesbasedondemand, improvingapplicationhealthandavailabilityandoptimizingperformanceandcosts. It doesnot directlyreducenetworklatency, automatesnapshots, or providecross-regionreplication. Question#80 Acompanyhasseveral departments. Eachdepartment hasitsownAWSaccountsfor itsapplications. Thecompanywantsall AWScostsonasingleinvoicetosimplifypayment, but thecompanywantstoknowthecoststhat eachdepartment isincurring.WhichAWStool or featurewill providethisfunctionality? A. AWSCost andUsageReportsB. ConsolidatedbillingC. SavingsPlansD. AWSBudgets Answer: B. ConsolidatedbillingExplanation: ConsolidatedbillingallowsmultipleAWSaccountstobelinkedtogether, enablingasingleinvoicefor all accountswhilestill providingcost breakdownsbyaccount. AWSCost andUsageReportsprovidedetailedcost databut donot consolidatebilling. SavingsPlansareforcost optimization, andAWSBudgetshelpstrackcostsbut doesn’ts consolidatebilling.",
    "options": [
      "A. AWSCost andUsageReports",
      "B. Consolidatedbilling",
      "C. SavingsPlans",
      "D. AWSBudgets"
    ],
    "answer": "B. Consolidatedbilling",
    "raw_answer": "ConsolidatedbillingallowsmultipleAWSaccountstobelinkedtogether, enablingasingleinvoicefor all accountswhilestill providingcost breakdownsbyaccount. AWSCost andUsageReportsprovidedetailedcost databut donot consolidatebilling. SavingsPlansareforcost optimization, andAWSBudgetshelpstrackcostsbut doesn’ts consolidatebilling."
  },
  {
    "id": 80,
    "question": "Acompanyhasseveral departments. Eachdepartment hasitsownAWSaccountsfor itsapplications. Thecompanywantsall AWScostsonasingleinvoicetosimplifypayment, but thecompanywantstoknowthecoststhat eachdepartment isincurring.WhichAWStool or featurewill providethisfunctionality? A. AWSCost andUsageReportsB. ConsolidatedbillingC. SavingsPlansD. AWSBudgets",
    "options": [
      "A. AWSCost andUsageReports",
      "B. Consolidatedbilling",
      "C. SavingsPlans",
      "D. AWSBudgets"
    ],
    "answer": "B. Consolidatedbilling",
    "raw_answer": "ConsolidatedbillingallowsmultipleAWSaccountstobelinkedtogether, enablingasingleinvoicefor all accountswhilestill providingcost breakdownsbyaccount. AWSCost andUsageReportsprovidedetailedcost databut donot consolidatebilling. SavingsPlansareforcost optimization, andAWSBudgetshelpstrackcostsbut doesn’ts consolidatebilling."
  },
  {
    "id": 81,
    "question": "Acompanyrunsitsworkloadsonpremises. Thecompanywantstoforecast thecost of runningalargeapplicationonAWS.WhichAWSserviceor tool canthecompanyusetoobtainthisinformation? A. AWSPricingCalculatorB. AWSBudgetsC. AWSTrustedAdvisorD. Cost Explorer",
    "options": [
      "A. AWSPricingCalculator",
      "B. AWSBudgets",
      "C. AWSTrustedAdvisor",
      "D. Cost Explorer"
    ],
    "answer": "A. AWSPricingCalculator",
    "raw_answer": "TheAWSPricingCalculator helpscustomersestimatethecost of runningworkloadsonAWS. It allowsuserstocreatedetailedcost estimatesbasedontheir usagepatterns."
  },
  {
    "id": 82,
    "question": "Acompanywantstoeliminatetheneedtoguessinfrastructurecapacitybeforedeployments.Thecompanyalsowantstospenditsbudget oncloudresourcesonlyasthecompanyusestheresources.Whichadvantageof theAWSCloudmatchesthecompany'srequirements? A. ReliabilityB. Global reachC. Economiesof scaleD. Pay-as-you-gopricing",
    "options": [
      "A. Reliability",
      "B. Global reach",
      "C. Economiesof scale",
      "D. Pay-as-you-gopricing"
    ],
    "answer": "D. Pay-as-you-gopricing",
    "raw_answer": "Pay-as-you-gopricingallowscustomerstopayonlyfor theresourcestheyuse,whicheliminatestheneedfor guessinginfrastructurecapacityandensuresthat thecompanyonlyspendsonwhat isactuallyused."
  },
  {
    "id": 83,
    "question": "WhichAWSservicesupportsahybridarchitecturethat givesuserstheabilitytoextendAWSinfrastructure, AWSservices, APIs, andtoolstodatacenters, co-locationenvironments, oron-premisesfacilities? A. AWSSnowmobileB. AWSLocal ZonesC. AWSOutpostsD. AWSFargate",
    "options": [
      "A. AWSSnowmobile",
      "B. AWSLocal Zones",
      "C. AWSOutposts",
      "D. AWSFargate"
    ],
    "answer": "C. AWSOutposts",
    "raw_answer": "AWSOutpostsextendsAWSinfrastructureandservicestoon-premisesenvironments, allowinguserstorunapplicationsacrosshybridenvironmentswithconsistentAPIs, tools, andservices."
  },
  {
    "id": 84,
    "question": "Acompanyhasaphysical tapelibrarytostoredatabackups. Thetapelibraryisrunningout ofspace. Thecompanyneedstoextendthetapelibrary'scapacitytotheAWSCloud.WhichAWSserviceshouldthecompanyusetomeet thisrequirement? A. AmazonElasticBlockStore(AmazonEBS)B. AmazonS3C. AmazonElasticFileSystem(AmazonEFS)D. AWSStorageGateway",
    "options": [
      "A. AmazonElasticBlockStore(AmazonEBS)",
      "B. AmazonS3",
      "C. AmazonElasticFileSystem(AmazonEFS)",
      "D. AWSStorageGateway"
    ],
    "answer": "D. AWSStorageGateway",
    "raw_answer": "AWSStorageGatewayisahybridcloudstorageservicethat enableson-premisesapplicationstoseamlesslyuseAWScloudstorage, includingtapebackupstoragesolutions."
  },
  {
    "id": 85,
    "question": "Anonlineretail companyhasseasonal salesspikesseveral timesayear, primarilyaroundholidays. Demandislower at other times. Thecompanyfindsit difficult topredict theincreasinginfrastructuredemandfor eachseason.Whichadvantagesof movingtotheAWSCloudwouldMOSTbenefit thecompany?(Choosetwo.) A. Global footprintB. ElasticityC. AWSservicequotasD. AWSsharedresponsibilitymodelE. Pay-as-you-gopricing",
    "options": [
      "A. Global footprint",
      "B. Elasticity",
      "C. AWSservicequotas",
      "D. AWSsharedresponsibilitymodel",
      "E. Pay-as-you-gopricing"
    ],
    "answer": "B. Elasticity, E. Pay-as-you-gopricing",
    "raw_answer": "Elasticityallowsthecompanytoscaleresourcesupor downbasedondemand,whichisideal for handlingseasonal spikes. Pay-as-you-gopricingensuresthat thecompanyonlypaysfor theresourcesit uses, reducingcostsduringlower-demandperiods."
  },
  {
    "id": 86,
    "question": "WhichAWSservicecanbeusedtoturntext intolifelikespeech? A. AmazonPollyB. AmazonKendraC. AmazonRekognitionD. AmazonConnect",
    "options": [
      "A. AmazonPolly",
      "B. AmazonKendra",
      "C. AmazonRekognition",
      "D. AmazonConnect"
    ],
    "answer": "A. AmazonPolly",
    "raw_answer": "AmazonPollyisaservicethat convertstext intolifelikespeech, offeringawidevarietyof voicesandlanguages."
  },
  {
    "id": 87,
    "question": "WhichAWSserviceor tool canbeusedtocaptureinformationabout inboundandoutboundtrafficinanAmazonVPC? A. VPCFlowLogsB. AmazonInspectorC. VPCendpoint servicesD. NATgateway",
    "options": [
      "A. VPCFlowLogs",
      "B. AmazonInspector",
      "C. VPCendpoint services",
      "D. NATgateway"
    ],
    "answer": "A. VPCFlowLogs",
    "raw_answer": "VPCFlowLogscaptureinformationabout theIPtrafficgoingtoandfromnetworkinterfacesinaVPC, whichisuseful for monitoringandtroubleshootingnetworktraffic."
  },
  {
    "id": 88,
    "question": "Acompanywantstoensurethat twoAmazonEC2instancesareinseparatedatacenterswithminimal communicationlatencybetweenthedatacenters.Howcanthecompanymeet thisrequirement? A. PlacetheEC2instancesintwoseparateAWSRegionsconnectedwithaVPCpeeringconnection.B. PlacetheEC2instancesintwoseparateAvailabilityZoneswithinthesameAWSRegion.C. PlaceoneEC2instanceonpremisesandtheother inanAWSRegion. ThenconnectthembyusinganAWSVPNconnection.D. PlacebothEC2instancesinaplacement groupfor dedicatedbandwidth.",
    "options": [
      "A. PlacetheEC2instancesintwoseparateAWSRegionsconnectedwithaVPCpeeringconnection.",
      "B. PlacetheEC2instancesintwoseparateAvailabilityZoneswithinthesameAWSRegion.",
      "C. PlaceoneEC2instanceonpremisesandtheother inanAWSRegion. ThenconnectthembyusinganAWSVPNconnection.",
      "D. PlacebothEC2instancesinaplacement groupfor dedicatedbandwidth."
    ],
    "answer": "B. PlacetheEC2instancesintwoseparateAvailabilityZoneswithinthesameAWSRegion.",
    "raw_answer": "AWSAvailabilityZonesaredistinct datacenterswithinaregionthat aredesignedtobeisolatedfromfailuresinother zones, providinglow-latencycommunicationbetweeninstancesindifferent zones."
  },
  {
    "id": 89,
    "question": "WhichAWSserviceis best used for managing user permissions and access control in an AWS environment? A. Amazon S3 B. Amazon EC2 C. IAM D. Amazon VPC",
    "options": [
      "A. Amazon S3",
      "B. Amazon EC2",
      "C. IAM",
      "D. Amazon VPC"
    ],
    "answer": "C. IAM",
    "raw_answer": "IAM (Identity and Access Management) is the service used for managing user permissions and access control in AWS."
  },
  {
    "id": 90,
    "question": "What is the primary purpose of Amazon CloudWatch? A. To store and retrieve data from relational databases. B. To monitor and manage AWS resources and applications. C. To create and deploy virtual machines. D. To provide secure access to your AWS account.",
    "options": [
      "A. To store and retrieve data from relational databases.",
      "B. To monitor and manage AWS resources and applications.",
      "C. To create and deploy virtual machines.",
      "D. To provide secure access to your AWS account."
    ],
    "answer": "B. To monitor and manage AWS resources and applications.",
    "raw_answer": "Amazon CloudWatch is a monitoring and observability service that allows you to track the performance of your AWS resources and applications."
  },
  {
    "id": 89,
    "question": "Sareauthenticatedinthecorporatenetworkandwant tobeabletouseAWSwithout havingtosigninasecondtime",
    "options": [
      "A. When the company creates AWS access credentials for individuals",
      "B. When the company needs to add users to IAM groups",
      "C. When the company uses AWS Identity and Access Management (IAM)",
      "D. When the company uses AWS CloudTrail"
    ],
    "answer": "B",
    "raw_answer": "When the company creates AWS access credentials for individuals"
  },
  {
    "id": 90,
    "question": "Which AWS services should a company use to read and write data that changes frequently? (Choose two.)",
    "options": [
      "A. Amazon S3 Glacier",
      "B. Amazon RDS",
      "C. AWS Snowball",
      "D. Amazon Redshift",
      "E. Amazon Elastic File System (Amazon EFS)"
    ],
    "answer": "B, E",
    "raw_answer": "Amazon RDS is a managed relational databaseservicesuitablefor frequent datareadsandwrites. Amazon EFS is ascalablefilestoragesystemfor applicationsthat requirefrequent readandwriteaccesstodata."
  },
  {
    "id": 91,
    "question": "Which AWS service is used to provide encryption for Amazon EBS?",
    "options": [
      "A. AWS Certificate Manager",
      "B. AWS Systems Manager",
      "C. AWS KMS",
      "D. AWS Config"
    ],
    "answer": "C",
    "raw_answer": "AWSKeyManagement Service(KMS) isusedtocreateandmanagecryptographickeysfor encryptingdata. AmazonEBSusesKMStoprovideencryptionat rest forvolumes."
  },
  {
    "id": 92,
    "question": "Which AWS services make use of global edge locations?",
    "options": [
      "A. AWS Fargate",
      "B. Amazon CloudFront",
      "C. AWS Global Accelerator",
      "D. AWS Wavelength",
      "E. Amazon VPC"
    ],
    "answer": "B, C",
    "raw_answer": "AmazonCloudFront andAWSGlobal Accelerator makeuseof AWS'sglobalnetworkof edgelocations. CloudFront isacontent deliverynetwork(CDN), andGlobalAccelerator improvestheavailabilityandperformanceof applicationsbyroutingtrafficthroughAWS'sedgelocations."
  },
  {
    "id": 93,
    "question": "A company is operating several factories where it builds products. The company needs the ability to process data, store data, and run applications with local system interdependencies that require low latency. Which AWS services should the company use to meet these requirements?",
    "options": [
      "A. AWS IoT Greengrass",
      "B. AWS Lambda",
      "C. AWS Outposts",
      "D. AWS Snowball Edge"
    ],
    "answer": "A",
    "raw_answer": "AWSIoTGreengrassisdesignedfor local dataprocessingandlow-latencyinteractions. It allowsdevicestoact locallyonthedatatheygenerate, whilestill usingthecloudfor management, analytics, andstorage."
  },
  {
    "id": 94,
    "question": "Which of the following is a recommended design principle for AWS Cloud architecture?",
    "options": [
      "A. Design tightly coupled components.",
      "B. Build a single application component that can handle all the application functionality.",
      "C. Make large changes on fewer iterations to reduce chances of failure.",
      "D. Avoid monolithic architecture by segmenting workloads."
    ],
    "answer": "D",
    "raw_answer": "It isrecommendedtodesignlooselycoupledcomponentsinAWStoenableflexibility, scalability, andresilience. Monolithicarchitecturesareharder toscaleandupdate."
  },
  {
    "id": 95,
    "question": "A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments. Which pillar of the AWS Well-Architected Framework does this design support?",
    "options": [
      "A. Security",
      "B. Performance efficiency",
      "C. Operational excellence",
      "D. Reliability"
    ],
    "answer": "C",
    "raw_answer": "Thepillar of operational excellencefocusesonmonitoring, incident response, andcontinuousimprovement of workloads. Regular updatesandreversiblechangesalignwiththisprinciple."
  },
  {
    "id": 96,
    "question": "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
    "options": [
      "A. Network Access Control List",
      "B. Security Groups",
      "C. AWS Trusted Advisor",
      "D. Virtual Private Gateways"
    ],
    "answer": "B",
    "raw_answer": "Securitygroupsact asavirtual firewall for EC2instancestocontrol inboundandoutboundtraffic. TheyareassociatedwithEC2instancesandoperateat theinstancelevel."
  },
  {
    "id": 97,
    "question": "A company has a workload that will run continuously for 1 year. The workload cannot tolerate service interruptions.",
    "options": [
      "A. All Upfront Reserved Instances",
      "B. Partial Upfront Reserved Instances",
      "C. Dedicated Instances",
      "D. On-Demand Instances"
    ],
    "answer": "A",
    "raw_answer": "ReservedInstancesoffer significant savingsover On-DemandInstances,especiallywhenpurchasedas\"All Upfront\" for a1-year term. Theyprovideacost-effectiveoptionfor long-running, uninterruptedworkloads."
  },
  {
    "id": 98,
    "question": "Which AWS service helps protect against DDoS attacks?",
    "options": [
      "A. AWS Shield",
      "B. Amazon Inspector",
      "C. Amazon GuardDuty",
      "D. Amazon Detective"
    ],
    "answer": "A",
    "raw_answer": "AWSShieldprovidesDDoSprotectionfor applicationsrunningonAWS. It offersbothstandardandadvancedprotectionagainst infrastructureandapplicationlayer attacks."
  },
  {
    "id": 99,
    "question": "Using AWSConfig to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
    "options": [
      "A. Security",
      "B. Operational excellence",
      "C. Performance efficiency",
      "D. Cost optimization"
    ],
    "answer": "B",
    "raw_answer": "Theoperational excellencepillar focusesonmonitoringandimprovingworkloadsover time. AWSConfighelpstrackchangestoAWSresources, ensuringtraceabilityandfacilitatingcontinuousimprovement."
  },
  {
    "id": 100,
    "question": "Which AWS tool or feature acts as a VPC firewall at the subnet level?",
    "options": [
      "A. Security Group",
      "B. Network ACL",
      "C. Traffic Mirroring",
      "D. Internet Gateway"
    ],
    "answer": "B",
    "raw_answer": "NetworkAccessControl Lists(ACLs) provideasubnet-level firewall that controlsinboundandoutboundtrafficfor theentiresubnet, unlikesecuritygroups, whichareinstance-level firewalls."
  },
  {
    "id": 101,
    "question": "Which AWS service can be used to decouple applications?",
    "options": [
      "A. AWS Config",
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "C. AWS Batch",
      "D. Amazon Simple Email Service (Amazon SES)"
    ],
    "answer": "B",
    "raw_answer": "AmazonSQSisamessagequeuingservicethat decouplesapplicationsbyallowingthemtocommunicateasynchronously. It helpsinhandlinghigh-throughput andensuresthat applicationsarenot directlydependent oneachother."
  },
  {
    "id": 102,
    "question": "Which disaster recovery option is the least expensive?",
    "options": [
      "A. Warm standby",
      "B. Multisite",
      "C. Backup and restore",
      "D. Pilot light"
    ],
    "answer": "C",
    "raw_answer": "Thebackupandrestoredisaster recoveryoptionistheleast expensiveasitinvolvesperiodicallybackingupdataandrestoringit whenneeded. It doesnot requirerunningstandbyi"
  },
  {
    "id": 102,
    "question": "Which disaster recovery option is the LEAST expensive?",
    "options": [
      "A. Warm standby",
      "B. Multisite",
      "C. Backup and restore",
      "D. Pilot light"
    ],
    "answer": "C",
    "raw_answer": "The backup and restore disaster recovery option is the least expensive as it involves periodically backing up data and restoring it when needed. It does not require running standby infrastructure like other options."
  },
  {
    "id": 103,
    "question": "Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?",
    "options": [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. Amazon EC2 instance store",
      "C. Amazon Elastic File System (Amazon EFS)",
      "D. Amazon S3"
    ],
    "answer": "B",
    "raw_answer": "Amazon EC2 instance store provides ephemeral storage that is physically attached to the host machine. The data is lost when the EC2 instance is stopped or terminated."
  },
  {
    "id": 104,
    "question": "Which of the following is a characteristic of the AWS account root user?",
    "options": [
      "A. The root user is the only user that can be configured with multi-factor authentication (MFA).",
      "B. The root user is the only user that can access the AWS Management Console.",
      "C. The root user is the first sign-in identity that is available when an AWS account is created.",
      "D. The root user has a password that cannot be changed."
    ],
    "answer": "C",
    "raw_answer": "The root user is the first user created when an AWS account is set up and has full access to all AWS services and resources. MFA can be configured for the root user, and the password can be changed."
  },
  {
    "id": 105,
    "question": "A company hosts an application on an Amazon EC2 instance. The EC2 instance needs to access several AWS resources, including Amazon S3 and Amazon DynamoDB. What is the MOST operationally efficient solution to delegate permissions?",
    "options": [
      "A. Create an IAM role with the required permissions. Attach the role to the EC2 instance.",
      "B. Create an IAM user and use its access key and secret access key in the application.",
      "C. Create an IAM user and use its access key and secret access key to create a CLI profile in the EC2 instance.",
      "D. Create an IAM role with the required permissions. Attach the role to the administrative IAM user."
    ],
    "answer": "A",
    "raw_answer": "Using IAM roles is the most operationally efficient way to delegate permissions to EC2 instances. This allows the EC2 instance to securely access AWS resources without needing to manage access keys."
  },
  {
    "id": 106,
    "question": "Which of the following is a component of the AWS Global Infrastructure?",
    "options": [
      "A. Amazon Alexa",
      "B. AWS Regions",
      "C. Amazon Lightsail",
      "D. AWS Organizations"
    ],
    "answer": "B",
    "raw_answer": "AWS Regions are geographical locations that contain multiple Availability Zones. They are a core component of AWS's global infrastructure, providing high availability and fault tolerance."
  },
  {
    "id": 107,
    "question": "What is the purpose of having an internet gateway within a VPC?",
    "options": [
      "A. To create a VPN connection to the VPC.",
      "B. To allow communication between the VPC and the internet.",
      "C. To impose bandwidth constraints on internet traffic.",
      "D. To load balance traffic from the internet across Amazon EC2 instances."
    ],
    "answer": "B",
    "raw_answer": "An internet gateway allows communication between resources in a VPC and the internet. It enables instances in the VPC to send and receive traffic from the internet."
  },
  {
    "id": 108,
    "question": "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
    "options": [
      "A. Amazon GuardDuty",
      "B. AWS Security Hub",
      "C. AWS Artifact",
      "D. AWS Shield"
    ],
    "answer": "C",
    "raw_answer": "AWS Artifact provides on-demand access to AWS’s security and compliance reports, including certifications and audit reports."
  },
  {
    "id": 109,
    "question": "A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in various AWS accounts that it wants to interconnect. Which AWS service or features should the company use to help simplify management and reduce operational costs?",
    "options": [
      "A. VPC endpoint",
      "B. AWS Direct Connect",
      "C. AWS Transit Gateway",
      "D. VPC peering"
    ],
    "answer": "C",
    "raw_answer": "AWS Transit Gateways simplify the management of inter-VPC connectivity by acting as a central hub to connect thousands of VPCs across multiple accounts. It reduces the complexity and operational overhead compared to VPC peering."
  },
  {
    "id": 110,
    "question": "A company is planning an infrastructure deployment to the AWS Cloud. Before the deployment, the company wants a cost estimate for running the infrastructure. Which AWS service or feature can provide this information?",
    "options": [
      "A. Cost Explorer",
      "B. AWS Trusted Advisor",
      "C. AWS Cost and Usage Report",
      "D. AWS Pricing Calculator"
    ],
    "answer": "D",
    "raw_answer": "The AWS Pricing Calculator allows users to estimate the cost of their AWS infrastructure based on their specific usage and configuration before deployment. It helps in planning and budgeting costs accurately."
  },
  {
    "id": 111,
    "question": "Which AWS service or tool helps to centrally manage billing and allow controlled access to resources across AWS accounts?",
    "options": [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Organizations",
      "C. Cost Explorer",
      "D. AWS Budgets"
    ],
    "answer": "B",
    "raw_answer": "AWS Organizations allow you to manage multiple AWS accounts centrally. It enables consolidated billing and allows you to apply policies across accounts, which help in controlling access to resources across AWS accounts."
  },
  {
    "id": 112,
    "question": "Which of the following are Amazon Virtual Private Cloud (Amazon VPC) resources?",
    "options": [
      "A. Objects; access control lists (ACLs)",
      "B. Subnets; internet gateways",
      "C. Access policies; buckets",
      "D. Groups; roles"
    ],
    "answer": "B",
    "raw_answer": "Amazon VPC resources include subnets, internet gateways, route tables, and network interfaces. These resources are essential for setting up a private network in AWS."
  },
  {
    "id": 113,
    "question": "A company needs to identify the last time that a specific user accessed the AWS Management Console. Which AWS service will provide this information?",
    "options": [
      "A. Amazon Cognito",
      "B. AWS CloudTrail",
      "C. Amazon Inspector",
      "D. Amazon GuardDuty"
    ],
    "answer": "B",
    "raw_answer": "AWS CloudTrail records all API calls made to the AWS Management Console, including user access details. It allows tracking of user activities and can provide the last time a user accessed the console."
  },
  {
    "id": 114,
    "question": "A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI). Which a",
    "options": [
      "A.  Amazon Elastic Block Store (Amazon EBS)",
      "B.  Amazon EC2 instance store",
      "C.  Amazon Elastic File System (Amazon EFS)",
      "D.  Amazon S3"
    ],
    "answer": "B",
    "raw_answer": "Amazon EC2 instance store provides ephemeral storage that is physically attached to the host machine. The data is lost when the EC2 instance is stopped or terminated."
  },
  {
    "id": 116,
    "question": "ifythelast timethat aspecificuser accessedtheAWSManagementConsole.WhichAWSservicewill providethisinformation? A. AmazonCognitoB. AWSCloudTrailC. AmazonInspectorD. AmazonGuardDuty",
    "options": [
      "A. AmazonCognito",
      "B. AWSCloudTrail",
      "C. AmazonInspector",
      "D. AmazonGuardDuty"
    ],
    "answer": "B",
    "raw_answer": "AWSCloudTrail recordsall API callsmadetotheAWSManagement Console,includinguser accessdetails. It allowstrackingof user activitiesandcanprovidethelast timeauser accessedtheconsole."
  },
  {
    "id": 114,
    "question": "AcompanylaunchedanAmazonEC2instancewiththelatest AmazonLinux2AmazonMachineImage(AMI).Whichactionscanasystemadministrator taketoconnect totheEC2instance?(Choosetwo.) A. UseAmazonEC2InstanceConnect.B. UseaRemoteDesktopProtocol (RDP) connection.C. UseAWSBatchD. UseAWSSystemsManager SessionManager.E. UseAmazonConnect",
    "options": [
      "A. UseAmazonEC2InstanceConnect",
      "B. UseaRemoteDesktopProtocol (RDP) connection",
      "C. UseAWSBatch",
      "D. UseAWSSystemsManager SessionManager",
      "E. UseAmazonConnect"
    ],
    "answer": "A, D",
    "raw_answer": "AmazonEC2InstanceConnect allowsSSHaccesstoEC2instances. AWSSystemsManager SessionManager enablessecureshell accesstoEC2instanceswithoutneedinganSSHkeyor openports."
  },
  {
    "id": 115,
    "question": "Acompanywantstoperformsentiment analysisoncustomer serviceemail messagesthat itreceives. Thecompanywantstoidentifywhether thecustomer serviceengagement waspositiveor negative.WhichAWSserviceshouldthecompanyusetoperformthisanalysis? A. AmazonTextractB. AmazonTranslateC. AmazonComprehendD. AmazonRekognition",
    "options": [
      "A. AmazonTextract",
      "B. AmazonTranslate",
      "C. AmazonComprehend",
      "D. AmazonRekognition"
    ],
    "answer": "C",
    "raw_answer": "AmazonComprehendisanatural languageprocessing(NLP) servicethat canperformsentiment analysis, amongother taskslikeentityrecognition, ontext datasuchascustomer emails."
  },
  {
    "id": 117,
    "question": "What isthetotal amount of storageofferedbyAmazonS3? A. 100MBB. 5GBC. 5TBD. Unlimited",
    "options": [
      "A. 100MB",
      "B. 5GBC",
      "C. 5TBD",
      "D. Unlimited"
    ],
    "answer": "D",
    "raw_answer": "AmazonS3providesvirtuallyunlimitedstoragecapacity, allowinguserstostoreasmuchdataasneededwithout apredefinedlimit."
  },
  {
    "id": 118,
    "question": "AcompanyismigratingtoAmazonS3. Thecompanyneedstotransfer 60TBof datafromanon-premisesdatacenter toAWSwithin10days.WhichAWSserviceshouldthecompanyusetoaccomplishthismigration? A. AmazonS3GlacierB. AWSDatabaseMigrationService(AWSDMS)C. AWSSnowballD. AWSDirect Connect",
    "options": [
      "A. AmazonS3Glacier",
      "B. AWSDatabaseMigrationService(AWSDMS)",
      "C. AWSSnowball",
      "D. AWSDirect Connect"
    ],
    "answer": "C",
    "raw_answer": "AWSSnowball isaphysical datatransport solutionthat helpswithlarge-scaledatamigrations. It isideal for transferringlargeamountsof data, like60TB, withinashortperiod."
  },
  {
    "id": 119,
    "question": "What typeof databaseisAmazonDynamoDB? A. In-memoryB. RelationalC. Key-valueD. Graph",
    "options": [
      "A. In-memory",
      "B. Relational",
      "C. Key-value",
      "D. Graph"
    ],
    "answer": "C",
    "raw_answer": "AmazonDynamoDBisafullymanagedNoSQLdatabaseservicethat usesakey-valueanddocument datamodel, makingit suitablefor applicationsthat requirehighperformanceandscalability."
  },
  {
    "id": 120,
    "question": "AlargeorganizationhasasingleAWSaccount.What aretheadvantagesof reconfiguringthesingleaccount intomultipleAWSaccounts?(Choosetwo.) A. It allowsfor administrativeisolationbetweendifferent workloads.B. DiscountscanbeappliedonaquarterlybasisbysubmittingcasesintheAWSManagementConsole.C. TransitioningobjectsfromAmazonS3toAmazonS3Glacier inseparateAWSaccountswillbelessexpensive.D. Havingmultipleaccountsreducestherisksassociatedwithmaliciousactivitytargetedat asingleaccount.E. AmazonQuickSight offersaccesstoacost tool that providesapplication-specificrecommendationsfor environmentsrunninginmultipleaccounts.",
    "options": [
      "A. It allowsfor administrativeisolationbetweendifferent workloads",
      "B. DiscountscanbeappliedonaquarterlybasisbysubmittingcasesintheAWSManagementConsole",
      "C. TransitioningobjectsfromAmazonS3toAmazonS3Glacier inseparateAWSaccountswillbelessexpensive",
      "D. Havingmultipleaccountsreducestherisksassociatedwithmaliciousactivitytargetedat asingleaccount",
      "E. AmazonQuickSight offersaccesstoacost tool that providesapplication-specificrecommendationsfor environmentsrunninginmultipleaccounts"
    ],
    "answer": "A, D",
    "raw_answer": "UsingmultipleAWSaccountshelpsisolateworkloadsfor securityandadministrativepurposes. It alsolimitstheimpact of maliciousactivitybyreducingtheblastradius."
  },
  {
    "id": 121,
    "question": "Aretail companyhasrecentlymigrateditswebsitetoAWS. Thecompanywantstoensurethat itisprotectedfromSQLinjectionattacks. ThewebsiteusesanApplicationLoadBalancer todistributetraffictomultipleAmazonEC2instances. WhichAWSserviceor featurecanbeusedtocreateacustomrulethat blocksSQLinjectionattacks? A. SecuritygroupsB. AWSWAFC. NetworkACLsD. AWSShield",
    "options": [
      "A. Securitygroups",
      "B. AWSWAF",
      "C. NetworkACLs",
      "D. AWSShield"
    ],
    "answer": "B",
    "raw_answer": "AWSWebApplicationFirewall (WAF) allowsyoutocreatecustomrulestoblockmalicioustraffic, includingSQLinjectionattacks, toprotect webapplicationsfromcommonvulnerabilities."
  },
  {
    "id": 122,
    "question": "WhichAWSserviceprovidesafeaturethat canbeusedtoproactivelymonitor andplanfor theservicequotasof AWSresources? A. AWSCloudTrailB. AWSPersonal HealthDashboardC. AWSTrustedAdvisorD. AmazonCloudWatch",
    "options": [
      "A. AWSCloudTrail",
      "B. AWSPersonal HealthDashboard",
      "C. AWSTrustedAdvisor",
      "D. AmazonCloudWatch"
    ],
    "answer": "C",
    "raw_answer": "AWSTrustedAdvisor providesrecommendationstohelpusersoptimizetheirAWSenvironment. It includesafeaturefor monitoringservicequotas, helpingusersplanandmanageAWSresourceusageproactively."
  },
  {
    "id": 123,
    "question": "Whichof thefollowingisanadvantagethat usersexperiencewhentheymoveon-premisesworkloadstotheAWSCloud? A. Eliminationof expensesfor runningandmaintainingdatacentersB. Pricediscountsthat areidentical todiscountsfromhardwareprovidersC. Distributionof all operational controlstoAWSD. Eliminationof operational expenses",
    "options": [
      "A. Eliminationof expensesfor runningandmaintainingdatacenters",
      "B. Pricediscountsthat areidentical todiscountsfromhardwareproviders",
      "C. Distributionof all operational controlstoAWSD. Eliminationof operational expenses"
    ],
    "answer": "A",
    "raw_answer": "MovingworkloadstotheAWSCloudeliminatestheneedtomanageandmaintainon-premisesdatacenters, reducingcostsassociatedwithhardware, electricity, cooling, andphysical space."
  },
  {
    "id": 124,
    "question": "WhichAWSservicesoffer gatewayVPCendpointsthat canbeusedtoavoidsendingtrafficover theinternet?(Choosetwo.) A. AmazonSimpleNotificationService(AmazonSNS)B. AmazonSimpleQueueService(AmazonSQS)C. AWSCodeBuildD. AmazonS3E. AmazonDynamoDB",
    "options": [
      "A. AmazonSimpleNotificationService(AmazonSNS)",
      "B. AmazonSimpleQueueService(AmazonSQS)",
      "C. AWSCodeBuild",
      "D. AmazonS3",
      "E. AmazonDynamoDB"
    ],
    "answer": "D, E",
    "raw_answer": "AmazonS3andAmazonDynamoDBsupport gatewayVPCendpoints, allowingtraffictoremainwithintheAWSnetworkandavoidingtheneedtoroutetrafficover theinternet."
  },
  {
    "id": 125,
    "question": "Whichof thefollowingisthecustomer responsiblefor updatingandpatching, accordingtot",
    "options": [
      "A. Amazon",
      "B. AWS",
      "C. Customer",
      "D. Vendor"
    ],
    "answer": "C",
    "raw_answer": "The customer is responsible for updating and patching, according to..."
  },
  {
    "id": 125,
    "question": "Which of the following is the customer responsible for updating and patching, according to the AWS shared responsibility model?",
    "options": [
      "A. AmazonFSx for Windows FileServer",
      "B. AmazonWorkSpaces virtual Windows desktop",
      "C. AWS Directory Service for Microsoft ActiveDirectory",
      "D. AmazonRDS for Microsoft SQLServer"
    ],
    "answer": "B. AmazonWorkSpaces virtual Windows desktop",
    "raw_answer": "According to the AWS shared responsibility model, customers are responsible for managing and patching the operating system and applications on AmazonWorkSpaces, a managed desktop service."
  },
  {
    "id": 126,
    "question": "Who has the responsibility to patch the host operating system of an AmazonEC2 instance, according to the AWS shared responsibility model?",
    "options": [
      "A. Both AWS and the customer",
      "B. The customer only",
      "C. The EC2 hardware manufacturer",
      "D. AWS only"
    ],
    "answer": "B. The customer only",
    "raw_answer": "The customer is responsible for patching the operating system of the EC2 instance, while AWS is responsible for the underlying infrastructure and hardware."
  },
  {
    "id": 127,
    "question": "A company is using an AmazonRDS DB instance for an application that is deployed in the AWS Cloud. The company needs regular patching of the operating system of the server where the DB instance runs. What is the company’s responsibility in this situation, according to the AWS shared responsibility model?",
    "options": [
      "A. Open a support case to obtain administrative access to the server so that the company can patch the DB instance operating system.",
      "B. Open a support case and request that AWS patch the DB instance operating system.",
      "C. Use administrative access to the server, and apply the operating system patches during the regular maintenance window that is defined for the DB instance.",
      "D. Establish a regular maintenance window that tells AWS when to patch the DB instance operating system."
    ],
    "answer": "D. Establish a regular maintenance window that tells AWS when to patch the DB instance operating system.",
    "raw_answer": "AWS manages the patching of the underlying infrastructure of AmazonRDS. Customers can define a maintenance window to specify when they prefer AWS to apply patches."
  },
  {
    "id": 128,
    "question": "Why is an AWS Well-Architected review a critical part of the cloud design process?",
    "options": [
      "A. A Well-Architected review is mandatory before a workload can run on AWS.",
      "B. A Well-Architected review helps identify design gaps and helps evaluate design decisions and related documents.",
      "C. A Well-Architected review is an audit mechanism that is part of requirements for service level agreements.",
      "D. A Well-Architected review eliminates the need for ongoing auditing and compliance tests."
    ],
    "answer": "B. A Well-Architected review helps identify design gaps and helps evaluate design decisions and related documents.",
    "raw_answer": "A Well-Architected review evaluates the architecture based on AWS best practices. It identifies areas for improvement and ensures that the design is aligned with AWS’s principles for security, reliability, and performance."
  },
  {
    "id": 129,
    "question": "A company implements an AmazonEC2 AutoScaling policy along with an ApplicationLoadBalancer to automatically recover unhealthy applications that run on AmazonEC2 instances. Which pillar of the AWS Well-Architected Framework does this action cover?",
    "options": [
      "A. Security",
      "B. Performance efficiency",
      "C. Operational excellence",
      "D. Reliability"
    ],
    "answer": "D. Reliability",
    "raw_answer": "The action of using AutoScaling and an ApplicationLoadBalancer to recover unhealthy applications addresses the reliability pillar, ensuring that the system can handle failures and maintain availability."
  },
  {
    "id": 130,
    "question": "Which AWS Cloud benefit is shown by an architecture’s ability to withstand failures with minimal downtime?",
    "options": [
      "A. Agility",
      "B. Elasticity",
      "C. Scalability",
      "D. High availability"
    ],
    "answer": "D. High availability",
    "raw_answer": "High availability refers to a system’s ability to withstand failures with minimal downtime, ensuring continuous service availability. It is a core benefit of cloud architectures."
  },
  {
    "id": 131,
    "question": "Under the AWS shared responsibility model, which task is the customer’s responsibility when managing AWS Lambda functions?",
    "options": [
      "A. Creating versions of Lambda functions",
      "B. Maintaining server and operating systems",
      "C. Scaling Lambda resources according to demand",
      "D. Updating the Lambda runtime environment"
    ],
    "answer": "A. Creating versions of Lambda functions",
    "raw_answer": "According to the AWS shared responsibility model, the customer is responsible for managing the code and configuration of AWS Lambda functions, including creating versions. AWS manages the infrastructure, such as the servers and operating systems."
  },
  {
    "id": 132,
    "question": "What doesthe AWS Concierge Support team provide?",
    "options": [
      "A. A technical expert dedicated to the user",
      "B. A primary point of contact for AWS Billing and AWS Support",
      "C. A partner to help provide scaling guidance for an event launch",
      "D. A dedicated AWS staff member who reviews the user’s application architecture"
    ],
    "answer": "B. A primary point of contact for AWS Billing and AWS Support",
    "raw_answer": "The AWS Concierge Support team provides a primary point of contact for AWS Billing and AWS Support. They assist with billing inquiries and offer guidance on AWS services."
  },
  {
    "id": 133,
    "question": "A company needs to generate reports that can break down cloud costs by product, by company-defined tags, and by hour, day, and month. Which AWS tool should the company use to meet these requirements?",
    "options": [
      "A. Reserved Instance utilization and coverage reports",
      "B. Savings Plans utilization reports",
      "C. AWS Budgets reports",
      "D. AWSCost and Usage Reports"
    ],
    "answer": "D. AWSCost and Usage Reports",
    "raw_answer": "AWSCost andUsageReports providedetailed insights into cloud costs, including breakdowns by product, tags, and time intervals (hourly, daily, monthly). This tool is ideal for tracking costs in a granular manner."
  },
  {
    "id": 134,
    "question": "A company has a serverless application that includes an AmazonAPI Gateway API, an AWSLambda function, and an AmazonDynamoDB database. Which AWS service can the company use to trace user requests as they move through the application’s components?",
    "options": [
      "A. AWSCloudTrail",
      "B. AmazonCloudWatch",
      "C. AmazonInspector",
      "D. AWSX-Ray"
    ],
    "answer": "D. AWSX-Ray",
    "raw_answer": "AWSX-Ray is used to trace requests as they travel through various AWS services, helping developers understand performance bottlenecks and troubleshoot errors."
  },
  {
    "id": 134,
    "question": "A company has a serverless application that includes an Amazon API Gateway API, an AWS Lambda function, and an Amazon DynamoDB database. Which AWS service can the company use to trace user requests as they move through the application's components?",
    "options": [
      "A. AWS CloudTrail",
      "B. Amazon CloudWatch",
      "C. Amazon Inspector",
      "D. AWS X-Ray"
    ],
    "answer": "D. AWS X-Ray",
    "raw_answer": "AWSX-Rayisusedtotracerequestsastheytravel throughvariousAWSservices, helpingdevelopersunderstandperformancebottlenecksandtroubleshoot errorsinserverlessapplications."
  },
  {
    "id": 135,
    "question": "A company needs to set up a petabyte-scaledata warehouse in the AWS Cloud. Which AWS service will meet this requirement?",
    "options": [
      "A. Amazon DynamoDB",
      "B. Amazon RDS",
      "C. Amazon Redshift",
      "D. Amazon ElastiCache"
    ],
    "answer": "C. Amazon Redshift",
    "raw_answer": "AmazonRedshiftisafullymanageddatawarehouseservicedesignedtohandlelarge-scaledataanalytics, includingpetabyte-scalestorageandprocessing."
  },
  {
    "id": 136,
    "question": "Which AWS service is always provided at no charge?",
    "options": [
      "A. Amazon S3",
      "B. AWS Identity and Access Management (IAM)",
      "C. Elastic Load Balancers",
      "D. AWS WAF"
    ],
    "answer": "B. AWS Identity and Access Management (IAM)",
    "raw_answer": "AWSIAMisaservicethat allowsuserstomanageaccesstoAWSresources. It isprovidedat noadditional charge, thoughtheresourcesit managesmayincur costs."
  },
  {
    "id": 137,
    "question": "A company needs to design an AWS disaster recovery plan to cover multiple geographic areas. Which action will meet this requirement?",
    "options": [
      "A. Configure multiple AWS accounts.",
      "B. Configure the architecture across multiple Availability Zones in an AWS Region.",
      "C. Configure the architecture across multiple AWS Regions.",
      "D. Configure the architecture among many edge locations."
    ],
    "answer": "C. Configure the architecture across multiple AWS Regions.",
    "raw_answer": "Toensuredisaster recoveryacrossmultiplegeographicareas, acompanymustarchitect itsinfrastructureacrossmultipleAWSRegions. Thisprovideshighavailabilityandredundancyincaseof regional failures."
  },
  {
    "id": 138,
    "question": "Which of the following is a benefit of moving from an on-premises datacenter to the AWS Cloud?",
    "options": [
      "A. Compute instances can be launched and terminated as needed to optimize costs.",
      "B. Compute cost can be viewed in the AWS Billing and Cost Management console.",
      "C. Users retain full administrative access to their compute instances.",
      "D. Users can optimize costs by permanently running enough instances at peak load."
    ],
    "answer": "A. Compute instances can be launched and terminated as needed to optimize costs.",
    "raw_answer": "Oneof thekeybenefitsof AWSCloudistheabilitytodynamicallyscalecomputeresourcesbasedondemand. Thisflexibilityhelpsoptimizecostsbyonlyrunninginstanceswhenneeded."
  },
  {
    "id": 139,
    "question": "In which ways do the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises datacenters? (Choose two.)",
    "options": [
      "A. AWS replaces upfront capital expenditures with pay-as-you-go costs.",
      "B. AWS is designed for high availability, which eliminates user downtime.",
      "C. AWS eliminates the need for on-premises IT staff.",
      "D. AWS uses economies of scale to continually reduce prices.",
      "E. AWS offers a single pricing model for Amazon EC2 instances."
    ],
    "answer": "A. AWS replaces upfront capital expenditures with pay-as-you-go costs, D. AWS uses economies of scale to continually reduce prices.",
    "raw_answer": "AWShelpslower TCObyshiftingfromcapital expenditures(CapEx) tooperational expenditures(OpEx) withpay-as-you-gopricing. Additionally, AWS'slarge-scaleinfrastructureallowit topassoncost savingstocustomersthrougheconomiesof scale."
  },
  {
    "id": 140,
    "question": "Which AWS service monitors AWS accounts for security threats?",
    "options": [
      "A. Amazon GuardDuty",
      "B. AWS Secrets Manager",
      "C. Amazon Cognito",
      "D. AWS Certificate Manager (ACM)"
    ],
    "answer": "A. Amazon GuardDuty",
    "raw_answer": "AmazonGuardDutyisasecurityservicethat continuouslymonitorsAWSaccountsfor potential securitythreats, suchasunusual API callsor suspiciousnetworkactivity."
  },
  {
    "id": 141,
    "question": "Which benefit is included with an AWS Enterprise Support plan?",
    "options": [
      "A. AWS Partner Network (APN) support at no cost.",
      "B. Designated support from an AWS Technical account manager (TAM)",
      "C. On-site support from AWS engineers",
      "D. AWS managed compliance as code with AWSConfig"
    ],
    "answer": "B. Designated support from an AWS Technical account manager (TAM)",
    "raw_answer": "TheAWSEnterpriseSupport planincludesadesignatedTechnical AccountManager (TAM) whoprovidesproactiveguidanceandsupport. Thisisakeybenefit forenterprisecustomerstohelpthemmanagetheir AWSenvironment effectively."
  },
  {
    "id": 142,
    "question": "WhichtaskdoesAWSperformautomatically?",
    "options": [
      "A. Encrypt data that is stored in Amazon DynamoDB.",
      "B. Patch Amazon EC2 instances.",
      "C. Encrypt user network traffic.",
      "D. Create TLS certificates for users' websites."
    ],
    "answer": "C. Encrypt user network traffic",
    "raw_answer": "AWSautomaticallyencryptsnetworktrafficusingprotocolslikeTLSfor servicessuchasAmazonS3, AmazonEC2, andAmazonRDS. However, taskslikepatchingEC2instancesor creatingTLScertificatesarenot automaticallyperformedbyAWS."
  },
  {
    "id": 143,
    "question": "Which AWS service or tool can a company use to visualize, understand, and manage AWS spending and usage over time?",
    "options": [
      "A. AWS Trusted Advisor",
      "B. Amazon CloudWatch",
      "C. Cost Explorer",
      "D. AWS Budgets"
    ],
    "answer": "C. Cost Explorer",
    "raw_answer": "AWSCost Explorer helpsusersvisualizeandmanagetheir AWSspendingandusageover time. It providesdetailedinsightsintocost allocation, usagepatterns, andallowsuserstoforecast futurecosts."
  },
  {
    "id": 144,
    "question": "A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on-premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements?",
    "options": [
      "A. AWS Local Zones",
      "B. Availability Zones",
      "C. AWS Outposts",
      "D. AWS Wavelength Zones"
    ],
    "answer": "A. AWS Local Zones",
    "raw_answer": "AWSLocal ZonesextendAWSinfrastructuretolocationsclosetolargepopulationcenters, providinglow-latencyaccesstoAWSserviceswhilemeetingregulatoryrequirementsfor dataresidency."
  },
  {
    "id": 145,
    "question": "A company requires an isolated environment within AWS for security purposes. Which action can be taken to accomplish this?",
    "options": [
      "A. Create a separate Availability Zone to host the resources.",
      "B. Create a separate VPC to host the resources.",
      "C. Create a placement group to host the resources.",
      "D. Create an AWS Direct Connect connection between the company and AWS."
    ],
    "answer": "B. Create a separate VPC to host the resources.",
    "raw_answer": "AVirtual PrivateCloud(VPC) allowsfor thecreationof anisolatednetworkenvironment withi"
  },
  {
    "id": 145,
    "question": "A company requires an isolated environment within AWS for security purposes. Which action can be taken to accomplish this?",
    "options": [
      "A. Create a separate Availability Zone to host the resources.",
      "B. Create a separate VPC to host the resources.",
      "C. Create a placement group to host the resources.",
      "D. Create an AWS Direct Connect connection between the company and AWS."
    ],
    "answer": "B",
    "raw_answer": "Create a separate VPC to host the resources. A Virtual Private Cloud (VPC) allows for the creation of an isolated network environment within AWS. By creating a separate VPC, a company can ensure that its resources are isolated from other AWS customers and networks."
  },
  {
    "id": 146,
    "question": "Which AWS service is a highly available and scalable DNS web service?",
    "options": [
      "A. Amazon VPC",
      "B. Amazon CloudFront",
      "C. Amazon Route 53",
      "D. Amazon Connect"
    ],
    "answer": "C",
    "raw_answer": "AmazonRoute53 is a highly available and scalable Domain Name System (DNS) web service. It provides DNS routing, health checks, and domain registration services."
  },
  {
    "id": 147,
    "question": "Which of the following is an AWS best practice for managing an AWS account root user?",
    "options": [
      "A. Keep the root user password with the security team.",
      "B. Enable multi-factor authentication (MFA) for the root user.",
      "C. Create an access key for the root user.",
      "D. Keep the root user password consistent for compliance purposes."
    ],
    "answer": "B",
    "raw_answer": "AWS recommends enabling multi-factor authentication (MFA) for the root user to enhance security. This provides an additional layer of protection against unauthorized access."
  },
  {
    "id": 148,
    "question": "A company wants to improve its security and audit posture by limiting Amazon EC2 inbound access. What should the company use to access instances remotely instead of opening inbound SSH ports and managing SSH keys?",
    "options": [
      "A. EC2 keypairs",
      "B. AWS Systems Manager Session Manager",
      "C. AWS Identity and Access Management (IAM)",
      "D. Network ACLs"
    ],
    "answer": "B",
    "raw_answer": "AWS Systems Manager Session Manager allows for secure, auditable access to EC2 instances without needing to open inbound SSH ports or manage SSH keys. It provides a more secure and controlled access method."
  },
  {
    "id": 149,
    "question": "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
    "options": [
      "A. No upfront payment",
      "B. Hourly on-demand payment",
      "C. Partial upfront payment",
      "D. All upfront payment"
    ],
    "answer": "D",
    "raw_answer": "The \"All upfront payment\" option for EC2 Dedicated Host reservations provides the largest discount. This option offers significant savings compared to hourly or partial upfront payment options."
  },
  {
    "id": 150,
    "question": "A company has refined its workload to use specific AWS services to improve efficiency and reduce cost. Which best practice for cost governance does this example show?",
    "options": [
      "A. Resource controls",
      "B. Cost allocation",
      "C. Architecture optimization",
      "D. Tagging enforcement"
    ],
    "answer": "C",
    "raw_answer": "Architecture optimization involves refining workloads to use AWS services that improve efficiency and reduce cost. This is a key practice for cost governance, ensuring that resources are used in the most cost-effective manner."
  },
  {
    "id": 151,
    "question": "A company would like to host its MySQL databases on AWS and maintain full control over the operating system, database installation, and configuration. Which AWS services should the company use to host the databases?",
    "options": [
      "A. Amazon RDS",
      "B. Amazon EC2",
      "C. Amazon DynamoDB",
      "D. Amazon Aurora"
    ],
    "answer": "B",
    "raw_answer": "Amazon EC2 provides full control over the operating system, database installation, and configuration. While Amazon RDS and Amazon Aurora offer managed database services, they do not provide full control over the underlying infrastructure. DynamoDB is a NoSQL database service, not suitable for MySQL."
  },
  {
    "id": 152,
    "question": "How do the AWS global infrastructure offer high availability and fault tolerance to its users?",
    "options": [
      "A. The AWS infrastructure is made up of multiple AWS Regions within various Availability Zones located in areas that have low flood risk, and are interconnected with low-latency networks and redundant power supplies.",
      "B. The AWS infrastructure consists of subnets containing various Availability Zones with multiple data centers located in the same geographic location.",
      "C. AWS allows users to choose AWS Regions and data centers so that users can select the closest data centers in different Regions.",
      "D. The AWS infrastructure consists of isolated AWS Regions with independent Availability Zones that are connected with low-latency networking and redundant power supplies."
    ],
    "answer": "D",
    "raw_answer": "AWS infrastructure is designed with high availability and fault tolerance by using multiple Availability Zones within each AWS Region. These Availability Zones are isolated from each other but connected with low-latency networking to ensure reliability and redundancy."
  },
  {
    "id": 153,
    "question": "A company is using Amazon EC2 AutoScaling to scale its Amazon EC2 instances. Which benefit of the AWS Cloud does this example illustrate?",
    "options": [
      "A. High availability",
      "B. Elasticity",
      "C. Reliability",
      "D. Global reach"
    ],
    "answer": "B",
    "raw_answer": "Elasticity refers to the ability to automatically scale resources up or down based on demand. EC2 AutoScaling is a key feature that enables elasticity by automatically adjusting the number of EC2 instances to match the application's needs."
  },
  {
    "id": 154,
    "question": "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    "options": [
      "A. Amazon Simple Notification Service (AmazonSNS)",
      "B. Amazon Simple Email Service (AmazonSES)",
      "C. Amazon CloudWatch alerts",
      "D. Amazon Simple Queue Service (AmazonSQS)"
    ],
    "answer": "A",
    "raw_answer": "AmazonSNS is a fully managed messaging service that allows sending both text and email messages from distributed applications. It can also send messages to other endpoints like mobile devices or HTTP endpoints."
  },
  {
    "id": 155,
    "question": "A user is able to set up a master payer account to view consolidated billing reports through:",
    "options": [
      "A. AWS Budgets",
      "B. Amazon Macie",
      "C. Amazon QuickSight",
      "D. AWS Organizations"
    ],
    "answer": "D",
    "raw_answer": "AWSOrganizations allows users to set up a master payer account to view consolidated billing reports for multiple AWS accounts. This feature helps manage and optimize costs across multiple accounts within the organization."
  },
  {
    "id": 156,
    "question": "According to the AWS shared responsibility model, which...",
    "options": [
      "A. AWS manages all aspects of security.",
      "B. AWS manages the security of the cloud, and the customer manages security within the cloud.",
      "C. The customer manages all aspects of security.",
      "D. AWS and the customer share all security responsibilities equally."
    ],
    "answer": "B",
    "raw_answer": "AWS manages the security of the cloud, and the customer manages security within the cloud. This model defines the division of responsibilities between AWS and its customers."
  },
  {
    "id": 155,
    "question": "A user is able to set up a master payer account to view consolidated billing reports through:",
    "options": [
      "A. AWSBudgets",
      "B. AmazonMacie",
      "C. AmazonQuickSight",
      "D. AWSOrganizations"
    ],
    "answer": "D. AWSOrganizations",
    "raw_answer": "AWSOrganizationsallowsuserstoset upamaster payer account toviewconsolidatedbillingreportsfor multipleAWSaccounts. Thisfeaturehelpsmanageandoptimizecostsacrossmultipleaccountswithintheorganization."
  },
  {
    "id": 156,
    "question": "According to the AWS shared responsibility model, which task is the customer's responsibility?",
    "options": [
      "A. Maintaining the infrastructure needed to run AWS Lambda",
      "B. Updating the operating system of AmazonDynamoDB instances",
      "C. MaintainingAmazonS3infrastructure",
      "D. Updating the guest operating system on AmazonEC2 instances"
    ],
    "answer": "D. Updating the guest operating system on AmazonEC2 instances",
    "raw_answer": "In the shared responsibility model, AWS is responsible for the underlying infrastructure, while the customer is responsible for managing and updating the guest operating system on AmazonEC2 instances."
  },
  {
    "id": 157,
    "question": "A company wants to migrate a small website and database quickly from on-premises infrastructure to the AWS Cloud. The company has limited operational knowledge to perform the migration. Which AWS services support this use case?",
    "options": [
      "A. AmazonEC2",
      "B. AmazonLightsail",
      "C. AmazonS3",
      "D. AWSLambda"
    ],
    "answer": "B. AmazonLightsail",
    "raw_answer": "AmazonLightsail is a simplified AWS service designed for easy deployment and management of websites and databases. It is ideal for users with limited operational knowledge who want to quickly migrate to the cloud."
  },
  {
    "id": 158,
    "question": "A company is moving multiple applications to a single AWS account. The company wants to monitor the AWS Cloud cost incurred by each application. What can the company do to meet this requirement?",
    "options": [
      "A. Set up invoiced billing.",
      "B. Use AWS Artifact.",
      "C. Set budgets in Cost Explorer.",
      "D. Create cost allocation tags."
    ],
    "answer": "D. Create cost allocation tags",
    "raw_answer": "Cost allocation tags allow users to categorize and track AWS costs for specific resources. By creating tags for each application, the company can track and monitor costs associated with each one."
  },
  {
    "id": 159,
    "question": "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?",
    "options": [
      "A. Vertical scaling",
      "B. Manual failure recovery",
      "C. Testing recovery procedures",
      "D. Changing infrastructure manually"
    ],
    "answer": "C. Testing recovery procedures",
    "raw_answer": "The reliability pillar of the AWS Well-Architected Framework emphasizes the importance of testing recovery procedures to ensure that systems can recover from failures quickly and effectively."
  },
  {
    "id": 160,
    "question": "A user needs to quickly deploy an non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
    "options": [
      "A. AmazonRDS",
      "B. AmazonDynamoDB",
      "C. AmazonAurora",
      "D. AmazonRedshift"
    ],
    "answer": "B. AmazonDynamoDB",
    "raw_answer": "AmazonDynamoDB is a fully managed NoSQL database service that does not require users to manage the underlying hardware or database software. It provides fast and predictable performance at any scale."
  },
  {
    "id": 161,
    "question": "Which task is an AWS responsibility when a workload is running in AmazonRDS?",
    "options": [
      "A. Creating the database table",
      "B. Updating the database schema",
      "C. Installing the database engine",
      "D. Dropping the database records"
    ],
    "answer": "C. Installing the database engine",
    "raw_answer": "In AmazonRDS, AWS is responsible for the underlying infrastructure, including the installation and management of the database engine. The user is responsible for creating and managing database tables, schemas, and records."
  },
  {
    "id": 162,
    "question": "A development team want to publish and manage web services that provide REST APIs. Which AWS service will meet this requirement?",
    "options": [
      "A. AWSAppMesh",
      "B. AmazonAPI Gateway",
      "C. AmazonCloudFront",
      "D. AWSCloudMap"
    ],
    "answer": "B. AmazonAPI Gateway",
    "raw_answer": "AmazonAPI Gateway is designed specifically to create, publish, and manage REST APIs. It provides a fully managed service for deploying APIs that can be integrated with other AWS services."
  },
  {
    "id": 163,
    "question": "A company has a social media platform in which users upload and share photos with other users. The company wants to identify and remove inappropriate photos. The company has no machine learning (ML) scientists and must build this detection capability with no ML expertise. Which AWS services should the company use to build this capability?",
    "options": [
      "A. AmazonSageMaker",
      "B. AmazonTextract",
      "C. AmazonRekognition",
      "D. AmazonComprehend"
    ],
    "answer": "C. AmazonRekognition",
    "raw_answer": "AmazonRekognition is a machine learning-based service that can detect inappropriate content in images. It is fully managed and does not require the company to have ML expertise."
  },
  {
    "id": 164,
    "question": "Which responsibility belongs to AWS when a company hosts its databases on AmazonEC2 instances?",
    "options": [
      "A. Database backups",
      "B. Databasesoftwarepatches",
      "C. Operatingsystempatches",
      "D. Operatingsysteminstallations"
    ],
    "answer": "C. Operatingsystempatches",
    "raw_answer": "When hosting databases on AmazonEC2 instances, AWS is responsible for managing the physical infrastructure and providing the underlying virtual machines. The company is responsible for the databasesoftware, backups, and patching. AWS handles operating system patches."
  },
  {
    "id": 165,
    "question": "A company wants to use AmazonS3 to store its legacy data. The data is rarely accessed. However, the data is critical and cannot be recreated. The data needs to be available for retrieval within seconds. Which S3 storage class meets these requirements MOST cost-effectively?",
    "options": [
      "A. S3Standard",
      "B. S3OneZone-Infrequent Access (S3OneZone-IA)",
      "C. S3Standard-Infrequent Access (S3Standard-IA)",
      "D. S3Glacier"
    ],
    "answer": "C. S3Standard-Infrequent Access (S3Standard-IA)",
    "raw_answer": "S3Standard-IA is designed for data that is infrequently accessed but needs to be retrieved quickly when required. It is more cost-effective than S3Standard for infrequently accessed data while still offering fast retrieval times."
  },
  {
    "id": 166,
    "question": "An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost-effective manner. Which AWS Cloud features will help the company meet this requirement? (Choose two.)",
    "options": [
      "A. Cross-Region workload deployment",
      "B. Pay-as-you-go pricing",
      "C. Built-in AWS CloudTrail audit capabilities",
      "D. AutoScaling policies",
      "E. Centralized logging"
    ],
    "answer": "B. Pay-as-you-go pricing, D. AutoScaling policies",
    "raw_answer": "Pay-as-you-go pricing allows the company to only pay for the resources it uses, which helps manage seasonal workload increases. AutoScaling policies automatically adjust the number of resources based on demand."
  },
  {
    "id": 174,
    "question": "The company needs to automatically handle lease on a seasonal workload increase in a cost-effective manner. Which AWS Cloud features will help the company meet this requirement? (Choose two.)",
    "options": [
      "A. Cross-Region workload deployment",
      "B. Pay-as-you-go pricing",
      "C. Built-in AWS CloudTrail audit capabilities",
      "D. AutoScaling policies",
      "E. Centralized logging"
    ],
    "answer": "B. Pay-as-you-go pricing, D. AutoScaling policies",
    "raw_answer": "Pay-as-you-go pricing allow the company to only pay for the resources it uses, which helps manage seasonal workload increases cost-effectively. AutoScaling automatically adjusts the resources based on demand, ensuring the company can scale up or down efficiently."
  },
  {
    "id": 167,
    "question": "Which AWS service helps developers use loose coupling and reliable messaging between microservices?",
    "options": [
      "A. ElasticLoadBalancing",
      "B. AmazonSimpleNotificationService (AmazonSNS)",
      "C. AmazonCloudFront",
      "D. AmazonSimpleQueueService (AmazonSQS)"
    ],
    "answer": "D. AmazonSimpleQueueService (AmazonSQS)",
    "raw_answer": "AmazonSQS is a fully managed message queue service that enables loose coupling between microservices. It helps ensure reliable messaging, allowing services to communicate asynchronously and handle varying loads."
  },
  {
    "id": 168,
    "question": "A company needs to build an application that uses AWS services. The application will be delivered to residents in European Countries. The company must abide by regional regulatory requirements. Which AWS service or program should the company use to determine which AWS services meet the regional requirements?",
    "options": [
      "A. AWSAudit Manager",
      "B. AWSShield",
      "C. AWSComplianceProgram",
      "D. AWSArtifact"
    ],
    "answer": "D. AWSArtifact",
    "raw_answer": "AWSArtifact is a service that provides on-demand access to AWS compliance reports and other security and compliance documentation. It helps companies understand how AWS services meet regional regulatory requirements."
  },
  {
    "id": 169,
    "question": "A company needs to implement identity management for a fleet of mobile apps that are running in the AWS Cloud. Which AWS service will meet this requirement?",
    "options": [
      "A. AmazonCognito",
      "B. AWSSecurityHub",
      "C. AWSShield",
      "D. AWSWAF"
    ],
    "answer": "A. AmazonCognito",
    "raw_answer": "AmazonCognito provides user identity and access management for mobile and web applications. It supports features such as user sign-up, sign-in, and access control."
  },
  {
    "id": 170,
    "question": "A company needs an Amazon EC2 instance for a rightsized database server that must run constantly for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    "options": [
      "A. StandardReservedInstance",
      "B. ConvertibleReservedInstance",
      "C. On-DemandInstance",
      "D. Spot Instance"
    ],
    "answer": "A. StandardReservedInstance",
    "raw_answer": "A StandardReservedInstance offers significant savings over On-Demand Instances when running continuously for a year. It is the most cost-effective option for long-term, predictable workloads."
  },
  {
    "id": 171,
    "question": "A company has multiple applications and is now building a new multi-tier application. The company will host the new application on Amazon EC2 instances. The company wants thenetwork routing and traffic between the various applications to follow the security principle of least privilege. Which AWS service or feature should the company use to enforce this principle?",
    "options": [
      "A. Securitygroups",
      "B. AWSShield",
      "C. AWSGlobal Accelerator",
      "D. AWSDirect Connect gateway"
    ],
    "answer": "A. Securitygroups",
    "raw_answer": "Securitygroups act as virtual firewalls for Amazon EC2 instances. They allow you to control incoming and outgoing traffic based on specific rules, ensuring that only authorized traffic can reach the application, thus enforcing the principle of least privilege."
  },
  {
    "id": 172,
    "question": "A company’s web application requires AWS credentials and authorization to use an AWS service. Which IAM entity should the company use as best practice?",
    "options": [
      "A. IAMrole",
      "B. IAMuser",
      "C. IAMgroup",
      "D. IAMmulti-factor authentication (MFA)"
    ],
    "answer": "A. IAMrole",
    "raw_answer": "IAMroles are best practice for granting permission to applications or services that need to access AWS resources. Unlike IAM users, roles are not associated with specific individuals but can be assumed by any trusted entity, such as EC2 instances or AWSLambda functions."
  },
  {
    "id": 173,
    "question": "A company is creating a document that defines the operating system patch routine for all the company’s systems. Which AWS resources should the company include in this document? (Choose two.)",
    "options": [
      "A. AmazonEC2instances",
      "B. AWSLambdafunctions",
      "C. AWSFargateTasks",
      "D. AmazonRDSinstances",
      "E. AmazonElasticContainerService (AmazonECS) instances"
    ],
    "answer": "A. AmazonEC2instances, D. AmazonRDSinstances",
    "raw_answer": "AmazonEC2instances and AmazonRDSinstances require regular operating system and database software patching. AWSLambdafunctions and AWSFargateTasks are serverless, and AmazonECSinstances use containerized applications that may not require the same patching routine as EC2 or RDS."
  },
  {
    "id": 174,
    "question": "Which AWS service or feature gives a company the ability to control incoming traffic and outgoing traffic for Amazon EC2 instances?",
    "options": [
      "A. Securitygroups",
      "B. AmazonRoute53",
      "C. AWSDirect Connect",
      "D. AmazonVPC"
    ],
    "answer": "A. Securitygroups",
    "raw_answer": "Securitygroups are used to control the inbound and outbound traffic to Amazon EC2 instances. They act as firewalls, ensuring only authorized traffic can reach the instances."
  },
  {
    "id": 175,
    "question": "A company is starting to build its infrastructure in the AWS Cloud. The company wants access to technical support during business hours. The company also wants general architectural guidance as teams build and test new applications. Which AWS Support plan will meet these requirements at the lowest cost?",
    "options": [
      "A. AWSBasicSupport",
      "B. AWSDeveloperSupport",
      "C. AWSBusinessSupport",
      "D. AWSEnterpriseSupport"
    ],
    "answer": "B. AWSDeveloperSupport",
    "raw_answer": "The AWSDeveloper Support plan provides access to technical support during business hours and offers architectural guidance. It is the most cost-effective option for companies building and testing new applications in the AWS Cloud."
  },
  {
    "id": 176,
    "question": "A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS. Which AWS services should the company use to meet this requirement?",
    "options": [
      "A. AWSLambda",
      "B. AmazonRoute53",
      "C. AmazonCloudFront",
      "D. AWSDirectConnect"
    ],
    "answer": "B. AmazonRoute53",
    "raw_answer": "AmazonRoute53 is a scalable Domain Name System (DNS) web service that is used to manage domain names. It can be used to host the domain name for the company’s public website."
  },
  {
    "id": 177,
    "question": "A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance, and security. Which AWS Support plan will meet these requirements?",
    "options": [
      "A. AWSBasicSupport",
      "B. AWSDeveloperSupport",
      "C. AWSBusinessSupport",
      "D. AWSEnterpriseSupport"
    ],
    "answer": "D. AWSEnterpriseSupport",
    "raw_answer": "The AWSEnterpriseSupport plan provides comprehensive support, including best practice recommendations across all categories, making it the most suitable option for a thorough AWS environment evaluation."
  },
  {
    "id": 186,
    "question": "WhichAWSserviceshouldthecompanyusetomeet thisrequirement? A. AWSLambdaB. AmazonRoute53C. AmazonCloudFrontD. AWSDirect Connect",
    "options": [
      "A. AWSLambda",
      "B. AmazonRoute53",
      "C. AmazonCloudFront",
      "D. AWSDirect Connect"
    ],
    "answer": "B",
    "raw_answer": "AmazonRoute53isascalableDomainNameSystem(DNS) webservicethat isusedtomanagedomainnames. It canbeusedtohost thedomainnamefor thecompany'spublicwebsite."
  },
  {
    "id": 177,
    "question": "AcompanyneedstoevaluateitsAWSenvironment andprovidebest practicerecommendationsinfivecategories: cost, performance, servicelimits, fault tolerance, andsecurity.WhichAWSservicecanthecompanyusetomeet theserequirements?",
    "options": [
      "A. AWSShield",
      "B. AWSWAFC",
      "C. AWSTrustedAdvisor",
      "D. AWSServiceCatalog"
    ],
    "answer": "C",
    "raw_answer": "AWSTrustedAdvisor providesreal-timebest practicerecommendationsinseveral categories,includingcost optimization, performance, fault tolerance, andsecurity. It helpsevaluateAWSenvironmentsandimprovetheir efficiency."
  },
  {
    "id": 178,
    "question": "WhichAWSserviceprovidesthecapabilitytoviewend-to-endperformancemetricsandtroubleshoot distributedapplications?",
    "options": [
      "A. AWSCloud9",
      "B. AWSCodeStar",
      "C. AWSCloudMap",
      "D. AWSX-Ray"
    ],
    "answer": "D",
    "raw_answer": "AWSX-Rayhelpsdevelopersanalyzeanddebugdistributedapplications, providingend-to-endperformancemetricsandinsightsintoapplicationperformance. It helpsinidentifyingperformancebottlenecksandtroubleshootingissues."
  },
  {
    "id": 179,
    "question": "Whichcloudcomputingbenefit doesAWSdemonstratewithitsabilitytooffer lower variablecostsasaresult of highpurchasevolumes?",
    "options": [
      "A. Pay-as-you-gopricing",
      "B. Highavailability",
      "C. Global reach",
      "D. Economiesof scale"
    ],
    "answer": "D",
    "raw_answer": "Economiesof scalerefer tothecost advantagesthat AWSachievesduetoitslarge-scaleinfrastructure. AsAWSpurchasesresourcesinbulk, it canoffer lower coststocustomers,resultinginlower variablecosts."
  },
  {
    "id": 180,
    "question": "WhichAWSserviceprovidesthreat detectionbymonitoringfor maliciousactivitiesandunauthorizedactionstoprotect AWSaccounts, workloads, anddatathat isstoredinAmazonS3?",
    "options": [
      "A. AWSShield",
      "B. AWSFirewall Manager",
      "C. AmazonGuardDuty",
      "D. AmazonInspector"
    ],
    "answer": "C",
    "raw_answer": "AmazonGuardDutyisathreat detectionservicethat continuouslymonitorsfor maliciousactivityandunauthorizedbehavior inAWSaccounts, workloads, anddata. It helpsprotect AWSresourcesbyidentifyingpotential threatsinreal-time."
  },
  {
    "id": 181,
    "question": "WhichAWSservicecanacompanyusetostoreandmanageDocker images?",
    "options": [
      "A. AmazonDynamoDB",
      "B. AmazonKinesisDataStreams",
      "C. AmazonElasticContainer Registry(AmazonECR)",
      "D. AmazonElasticFileSystem(AmazonEFS)"
    ],
    "answer": "C",
    "raw_answer": "AmazonElasticContainer Registry(AmazonECR) isafullymanagedDocker container registrythat allowsyoutostore, manage, anddeployDocker container images. It integrateswithAmazonECS, EKS, andother AWSservicesfor easydeployment."
  },
  {
    "id": 182,
    "question": "Acompanyneedsanautomatedsecurityassessment report that will identifyunintendednetworkaccesstoAmazonEC2instances. Thereport alsomust identifyoperatingsystemvulnerabilitiesonthoseinstances.WhichAWSserviceor featureshouldthecompanyusetomeet thisrequirement?",
    "options": [
      "A. AWSTrustedAdvisor",
      "B. Securitygroups",
      "C. AmazonMacie",
      "D. AmazonInspector"
    ],
    "answer": "D",
    "raw_answer": "AmazonInspector isanautomatedsecurityassessment servicethat helpsidentifyvulnerabilitiesandunintendednetworkaccessonAmazonEC2instances. It evaluatesinstancesfor securitybest practices, includingoperatingsystemvulnerabilities."
  },
  {
    "id": 183,
    "question": "Aglobal companyisbuildingasimpletime-trackingmobileapp. Theappneedtooperategloballyandmust storecollecteddatainadatabase. Datamust beaccessiblefromtheAWSRegionthat isclosest totheuser.What shouldthecompanydotomeet thesedatastoragerequirementswiththeLEASTamountof operational overhead?",
    "options": [
      "A. UseAmazonEC2inmultipleRegionstohost separatedatabases",
      "B. UseAmazonRDScross-Regionreplication",
      "C. UseAmazonDynamoDBglobal tables",
      "D. UseAWSDatabaseMigrationService(AWSDMS)"
    ],
    "answer": "C",
    "raw_answer": "AmazonDynamoDBglobal tablesprovideafullymanaged, multi-region, andmulti-masterdatabasesolutionthat replicatesdataacrossmultipleAWSRegions. Thisallowsfor low-latencyaccesstodatafromtheclosest regiontotheuser withminimal operational overhead."
  },
  {
    "id": 184,
    "question": "Whichof thefollowingareeconomicadvantagesof theAWSCloud?(Choosetwo.)",
    "options": [
      "A. Increasedworkforceproductivity",
      "B. Decreasedneedtoencrypt user data",
      "C. Manual complianceaudits",
      "D. Simplifiedtotal cost of ownership(TCO) accounting",
      "E. Faster product launches"
    ],
    "answer": "A, D",
    "raw_answer": "TheAWSCloudoffersincreasedworkforceproductivitybyenablingautomation, scalability, and flexibility. It alsosimplifiesTCOaccountingbyofferingpay-as-you-gopricingandreducingtheneedfor upfront investmentsinhardware."
  },
  {
    "id": 185,
    "question": "Whichcontrolsdoesthecustomer fullyinherit fromAWSintheAWSsharedresponsibilitymodel?",
    "options": [
      "A. Patchmanagement controls",
      "B. Awarenessandtrainingcontrols",
      "C. Physical andenvironmental controls",
      "D. Configurationmanagement controls"
    ],
    "answer": "C",
    "raw_answer": "IntheAWSsharedresponsibilitymodel, AWSisresponsiblefor thephysical andenvironmentalcontrolsof thedatacenters, suchashardwaresecurity, physical access, andenvironmentalmonitoring. Customersareresponsiblefor other aspectslikepatchmanagement andconfigurationmanagement."
  },
  {
    "id": 186,
    "question": "Whichtaskisacustomer'sresponsibility, accordingtotheAWSsharedresponsibilitymodel?",
    "options": [
      "A. Management of theguest operatingsystems",
      "B. Maintenanceof theconfigurationof infrastructuredevices",
      "C. Management of thehost operatingsystemsandvirtualization",
      "D. Maintenanceof thesoftwarethat powersAvailabilityZones"
    ],
    "answer": "A",
    "raw_answer": "IntheAWSsharedresponsibilitymodel, customersareresponsiblefor managingtheguestoperatingsystems(suchaspatchingandsecurity) for their EC2instances, whileAWSmanagestheunderlyinginfrastructureandvirtualization."
  },
  {
    "id": 187,
    "question": "WhichAWSserviceprovidesthecapabilitytoviewend-to-endperformancemetricsandtroubleshoot distributedapplications?",
    "options": [
      "A. Reliability",
      "B. Elasticity",
      "C. Agility",
      "D. Highavaila"
    ],
    "answer": "D",
    "raw_answer": "Highavailability is a desired outcome, but AWSX-Ray provides the specific capability to view end-to-end performance metrics and troubleshoot distributed applications."
  }
];