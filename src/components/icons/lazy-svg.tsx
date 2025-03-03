import React, { ComponentProps, FC, useEffect, useRef, useState } from "react";
import style from "./lazy-svg.module.css";

interface LazySvgProps extends ComponentProps<"svg"> {
  name: string;
}

const useLazySvgImport = (name: string) => {
  const importRef = useRef<FC<ComponentProps<"svg">> | "">("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const icon = await import(`./weather-icons/${name}.svg`);
        importRef.current = icon.default;
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    importIcon();
  }, [name]);

  return {
    error,
    loading,
    Svg: importRef.current
  };
};

export const LazySvg: FC<LazySvgProps> = ({ name, ...props }) => {
  const { error, loading, Svg } = useLazySvgImport(name);

  if (error) {
    return <div className={style.error}>{error.message}</div>;
  }

  if (loading) {
    return <div className={style.loading}>loading SVG...</div>;
  }

  if (!Svg) {
    return null;
  }

  return <Svg {...props} />;
};
