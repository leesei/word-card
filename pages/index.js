import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { FaCog } from "react-icons/fa";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import Slides from "../components/slides";
import Settings from "../components/settings";
import { settingsAtom, slideAtom } from "../atoms";
import { useUpdateAtom } from "jotai/utils";
import { shuffle } from "../helpers";

import wordset from "../wordset";

export default function Home() {
  const [settings, updateSettings] = useAtom(settingsAtom);
  const setSlide = useUpdateAtom(slideAtom);
  const [words, setWords] = useState([]);

  useEffect(() => {
    let _words = [...wordset[settings.wordset]];
    if (settings.shuffle) {
      shuffle(_words);
    }
    console.log(settings);
    console.log("update words, shuffle:", settings.shuffle);
    setWords(_words);
    setSlide(0);
  }, [settings]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <div>
      <Head>
        <title>Word Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slides settings={null} words={words} />

      {modalIsOpen && (
        <Dialog
          isOpen={true}
          onDismiss={closeModal}
          title="Settings"
          aria-label="Settings"
        >
          <Settings settings={settings} updateSettings={updateSettings} />
        </Dialog>
      )}

      <nav className="settings">
        <div className="is-flex is-justify-content-center">
          <button className="button is-light has-icon" onClick={openModal}>
            <span className="icon-text">
              <span className="icon">
                <FaCog />
              </span>
              <span>Settings</span>
            </span>
          </button>
        </div>
      </nav>

      <style jsx>
        {`
          .settings {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }
        `}
      </style>
    </div>
  );
}
