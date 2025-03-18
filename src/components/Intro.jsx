import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Intro = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Title
          className="!text-navy-900 !mb-4"
          level={1}
          style={{ fontSize: "3rem", fontWeight: "bold" }}
        >
          Welcome to HandsOn
        </Title>
        <Paragraph className="!text-navy-800 !font-semibold !text-lg !md:text-xl max-w-2xl mx-auto mb-8">
          "Join HandsOn—unite with passionate volunteers, create real change,
          and track your impact. Be the spark that transforms communities, one
          meaningful action at a time!"
        </Paragraph>
      </div>
    </section>
  );
};

export default Intro;
