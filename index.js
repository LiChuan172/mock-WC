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
