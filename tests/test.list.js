import { test } from "@playwright/test";
import loginCase from "./Login/login.spec";

test.describe.configure({ mode: "serial" });
test.describe(loginCase);
