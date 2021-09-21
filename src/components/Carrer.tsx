import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { TypeVariable } from "typescript";

export default class Carrer extends React.Component {
  render() {
    return (
      <Box>
        <h1>職務経歴（詳細はご質問ください）</h1>
        <First />
        <Second />
        <Third />
      </Box>
    );
  }
}

enum ContractType {
  FULL_TIME = "正社員",
  SUB_CONTRACTING = "業務委託",
}

type Props = {
  title: String; // 社名
  capital: String; // 資本金（約）
  employees: String; // 従業員数（約）
  content: String; // 業務内容
  periodStart: String; // 在籍期間(入社時期)
  periodEnd: String; // 在籍期間(退職時期)
  contract: ContractType; // 契約形態
};

function CompanyInfo(props: Props) {
  return (
    <Stack>
      <h2>{props.title}社</h2>
      <Box>
        在籍期間：{props.periodStart} 〜 {props.periodEnd}
      </Box>
      <Box>契約形態：{props.contract}</Box>
      <Box>資本金：約{props.capital}</Box>
      <Box>従業員数：約{props.employees}名</Box>
      <h3>業務内容</h3>
      <Box>{props.content}</Box>
    </Stack>
  );
}

function First() {
  return (
    <CompanyInfo
      title="A"
      capital="113億"
      employees="700"
      content="社内システムのパッケージ製品の開発／運用"
      periodStart="2012年4月"
      periodEnd="2016年12月"
      contract={ContractType.FULL_TIME}
    />
  );
}

function Second() {
  return (
    <CompanyInfo
      title="B"
      capital="16億"
      employees="450"
      content="撮影した画像を取得・閲覧できるサービスのAndroid版アプリ開発"
      periodStart="2017年10月"
      periodEnd="2019年12月"
      contract={ContractType.FULL_TIME}
    />
  );
}

function Third() {
  return (
    <CompanyInfo
      title="C"
      capital="63億"
      employees="950"
      content="法人向けクラウド名刺管理サービスのAndroid版アプリ開発におけるチームリーダー
        中途社員採用"
      periodStart="2019年12月"
      periodEnd="現在"
      contract={ContractType.FULL_TIME}
    />
  );
}
