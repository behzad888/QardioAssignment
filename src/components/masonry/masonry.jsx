//@flow
import React, {
  type Element as ReactElement,
  memo,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';

type ItemType = {
  title: string,
  imageUrl: string,
};

type MasonryPropType = {
  options: any,
  items: ItemType[],
  gap: number,
  onImageLoadComplete: () => void,
};

function MasonryComponent(props: MasonryPropType) {
  const [containerSize, setContainerSize] = useState(null);
  const [nodes, setNodes] = useState([]);
  const masonryRef = useRef(null);

  useEffect(() => {
    const containerSizeHandler = e => {
      let size = props.sizes
        .map(function(size) {
          return (
            size.mq && window.matchMedia('(min-width: ' + size.mq + ')').matches
          );
        })
        .indexOf(true);

      if (size === -1) {
        size = props.sizes.length - 1;
      }
      setContainerSize(props.sizes[size]);
    };
    containerSizeHandler();
    window.addEventListener('resize', containerSizeHandler);

    return () => {
      window.removeEventListener('resize', containerSizeHandler);
    };
  }, []);

  useEffect(() => {
    if (nodes.length <= 0) {
      return;
    }
    const nodesWidths = nodes.map(element => element.clientWidth);
    const nodesHeights = nodes.map(element => element.clientHeight);
    const columnHeights = Array.apply(null, Array(containerSize.columns)).map(
      () => 0
    );

    nodes.forEach((element, index) => {
      const columnTarget = columnHeights.indexOf(
        Math.min.apply(Math, columnHeights)
      );

      element.style.position = 'absolute';
      const nodeTop = `${columnHeights[columnTarget]}px`;
      const nodeLeft = `${columnTarget * nodesWidths[index] +
        columnTarget * containerSize.gap}px`;

      element.style.top = nodeTop;
      element.style.left = nodeLeft;
      //   element.style.transform = `translate3d(${nodeLeft}, ${nodeTop}, 0)`
      element.setAttribute('data-packed', '');

      const nodeWidth = nodesWidths[index];
      const nodeHeight = element.offsetHeight;

      if (nodeWidth && nodeHeight) {
        columnHeights[columnTarget] += nodeHeight + containerSize.gap;
      }
    });
  }, [nodes]);

  useEffect(() => {
    if (!containerSize) {
      return;
    }
    const children = [];
    for (let index = 0; index < masonryRef.current.children.length; index++) {
      const element = masonryRef.current.children[index];
      //   element.style.width = `${Math.floor(masonryRef.current.clientWidth / containerSize.columns) - containerSize.gap}px`
      //   element.style.height = `${Math.floor((Math.random() * props.options.maxHeight) + props.options.minHeight)}px`
      children.push(element);
    }

    setNodes(children);
  }, [containerSize]);

  return (
    <div className="masonry-layout" ref={masonryRef}>
      {props.items.map((item, index) => {
        return (
          <div className="child-item" key={index}>
            <img src={item.imageUrl} alt={item.title} />
            <span className="title">{item.title}</span>
            <span className="author">{item.author}</span>
          </div>
        );
      })}
    </div>
  );
}

MasonryComponent.defaultProps = {
  options: {
    columnsCount: 5,
    minHeight: 150,
    minWidth: 100,
    maxHeight: 350,
  },
  sizes: [
    {mq: '1275px', columns: 6, gap: 10},
    {mq: '1083px', columns: 5, gap: 10},
    {mq: '870px', columns: 4, gap: 10},
    {mq: '665px', columns: 3, gap: 10},
    {columns: 2, gap: 10},
  ],
  items: [
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'Hi',
      imageUrl:
        'https://washington-org.s3.amazonaws.com/s3fs-public/children-viewing-henry-the-elephant-at-natural-history-museum_credit-department-of-state-iip-photo-archive.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'Hi',
      imageUrl: 'https://media.timeout.com/images/105246805/630/472/image.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
    {
      title: 'salam',
      imageUrl:
        'https://structuretone.com/wp-content/uploads/2014/01/Rodin-Museum-6-resize.jpg',
    },
  ],
};

export default memo(MasonryComponent);
