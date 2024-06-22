import * as deliveryOptions from "../../data/deliveryOptions.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

describe("deliveryOptions", () => {
  it("returns the correct delivery price", () => {
    expect(deliveryOptions.GetDeliveryPrice(1)).toBe(0);
    expect(deliveryOptions.GetDeliveryPrice(2)).toBe(499);
    expect(deliveryOptions.GetDeliveryPrice(3)).toBe(999);
  });

  it("returns the correct delivery date", () => {
    expect(deliveryOptions.GetDeliveryDate(1)).toBe("Saturday, June 29");
    expect(deliveryOptions.GetDeliveryDate(2)).toBe("Wednesday, June 26");
    expect(deliveryOptions.GetDeliveryDate(3)).toBe("Sunday, June 23");
  });

  it("formats price correctly", () => {
    expect(deliveryOptions.FormatPrice(0)).toBe("FREE Shipping");
    expect(deliveryOptions.FormatPrice(200)).toBe("$2");
    expect(deliveryOptions.FormatPrice(305)).toBe("$3.05");
  });

  it("formats date correctly", () => {
    expect(deliveryOptions.FormatDate(dayjs("2019-06-22"))).toBe(
      "Saturday, June 22"
    );
    expect(deliveryOptions.FormatDate(dayjs("2019-06-26"))).toBe(
      "Wednesday, June 26"
    );
    expect(deliveryOptions.FormatDate(dayjs())).toBe(
      dayjs().format("dddd, MMMM D")
    );
  });
});
