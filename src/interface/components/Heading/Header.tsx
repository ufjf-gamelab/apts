import { cx } from "class-variance-authority";

import Button from "../Button";
import Text from "../Text";
import ActionPill, { type ActionPillProps } from "./ActionPill";
import Logotype from "./Logotype";
import Pill from "./Pill";

interface HeaderProps extends ActionPillProps {
    pageTitle: string;
}

export default function Header({ pageTitle, pageAction }: HeaderProps) {
    return (
        <header
            className={cx(
                "grid min-h-14 grid-cols-[min-content_auto_min-content] items-center bg-primary-common",
                "border-b-4",
                "md:border-b-6",
                "lg:border-b-8",
            )}
        >
            <div
                id="logotype"
                className={cx(
                    "box-content hidden",
                    "sm:block sm:size-14 sm:border-r-4",
                    "md:size-16 md:border-r-6",
                    "lg:size-[4.5rem] lg:border-r-8",
                )}
            >
                <Logotype />
            </div>
            <div
                id="header-contents"
                className={cx(
                    "flex items-end",
                    "gap-2 pl-2",
                    "sm:px-4",
                    "md:gap-4 md:px-6",
                )}
            >
                <Pill id="header-page-name" aria-label="Page">
                    <Text
                        content={pageTitle}
                        element="h1"
                        font-family="heading"
                        size="large"
                    />
                </Pill>
                <Pill
                    id="header-page-action"
                    aria-label="Page action"
                    className="flex items-center overflow-clip"
                >
                    <ActionPill pageAction={pageAction} />
                </Pill>
            </div>
            <div
                className={cx(
                    "flex items-end justify-end",
                    "pr-2",
                    "sm:pr-4",
                    "md:px-6",
                )}
            >
                <Button
                    icon="add"
                    aria-label="Add"
                    intent="accent"
                    size="large"
                />
            </div>
        </header>
    );
}
