const config = {
  wc_vw: {
    // 风速
    base: 30,
    amplitude: 10,
  },
  wc_te: {
    // 环境温度
    base: 10,
    amplitude: 20,
  },
  wc_tb: {
    // 轴承温度
    base: 30,
    amplitude: 30,
  },
  wc_ol: {
    // 油液高度
    base: 40,
    amplitude: 3,
  },
  wc_rev: {
    // 发电机转速
    base: 1700,
    amplitude: 100,
  },
  wc_p: {
    // 发电机功率
    base: 30,
    amplitude: 5,
  },
  c_p: {
    // 峰值
    base: 0.2,
    amplitude: 0.1,
  },
  c_pp: {
    // 峰峰值
    base: 0.3,
    amplitude: 0.1,
  },
  c_rmsa: {
    // 有效值
    base: 0.1,
    amplitude: 0.1,
  },
  c_rmsa_2: {
    // 有效值2
    base: 0.1,
    amplitude: 0.1,
  },
  c_rmsv: {
    // 速度有效值
    base: 0.1,
    amplitude: 0.1,
  },
  c_k: {
    // 峭度
    base: 0.5,
    amplitude: 0.1,
  },
  c_dl: {
    // 倾斜方向
    base: 0.8,
    amplitude: 0.2,
  },
  c_al: {
    // 倾斜角度
    base: 0.8,
    amplitude: 0.2,
  },
  c_plb: {
    // 螺栓预紧力
    base: 1000,
    amplitude: 300,
  },
  c_nf: {
    // 固有频率提取
    base: 500,
    amplitude: 80,
  },
  default: {
    base: 10,
    amplitude: 5,
  },
}

export const getMockWC = (shortName) => {
  const { base, amplitude } = config[shortName]
    ? config[shortName]
    : config.default

  return (
    base +
    (Math.random() < 0.5 ? -1 : 1) *
      amplitude *
      Math.random()
  )
}

function threshold(shortName, c) {
  const { base, amplitude } = config[shortName]
    ? config[shortName]
    : config.default
  return base + amplitude * c
}

export const threshold_I = (shortName) => threshold(shortName, 0.6)
export const threshold_II = (shortName) => threshold(shortName, 0.8)
