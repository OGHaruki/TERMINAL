import { SampleDetailsDto, SampleDto } from "../api/terminalSchemas";
import { useState } from "react";
import SamplesTable from "../components/Samples/SamplesTable";
import SampleDetails from "../components/Samples/SampleDetails";

const samplesData: SampleDto[] = [
  { code: "AS1", projectName: "TEST", createdAt: new Date("2021-09-01") },
  { code: "AS2", projectName: "TEST", createdAt: new Date("2021-09-02") },
  { code: "AS3", projectName: "TEST", createdAt: new Date("2021-09-03") },
  { code: "AS4", projectName: "TEST", createdAt: new Date("2021-09-04") },
  { code: "AS5", projectName: "TEST", createdAt: new Date("2021-09-05") },
  { code: "AS6", projectName: "TEST", createdAt: new Date("2021-09-06") },
  { code: "AS7", projectName: "TEST", createdAt: new Date("2021-09-07") },
  { code: "AS8", projectName: "TEST", createdAt: new Date("2021-09-08") },
  { code: "AS9", projectName: "TEST", createdAt: new Date("2021-09-09") },
  { code: "AS10", projectName: "TEST", createdAt: new Date("2021-09-10") },
];

const SamplesPage = () => {
  const [sampleDetails, setSampleDetails] = useState<SampleDetailsDto | null>({
    ...samplesData[0],
    comment: "This is a test comment",
    steps: [],
    tags: ["newsample, high-pressure"],
  });

  const changeSampleDetails = (code: string) => {
    // TODO: fetch details from API
    const foundSample = samplesData.find((sample) => sample.code === code);

    if (foundSample) {
      setSampleDetails({
        ...foundSample,
        comment: "Default comment",
        steps: [],
        tags: [],
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center p-5">
        <div className="flex-1 bg-white p-3 rounded-md m-1">
          <SamplesTable
            samplesData={samplesData}
            onChangeSampleDetails={changeSampleDetails}
          />
        </div>
        <div className="flex-1 bg-white p-3 rounded-md m-1 self-start">
          <SampleDetails sampleDetails={sampleDetails} />
        </div>
      </div>
    </div>
  );
};

export default SamplesPage;
